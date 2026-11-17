-- Ошибки сайта, админы, уведомления в Telegram.
-- Токен бота и chat_id хранятся в Supabase Vault (секреты 'tg_token', 'tg_chat'), не в репозитории.

create extension if not exists pg_net with schema extensions;

-- 1. Ошибки JS с сайта (анонимно — только вставка)
create table if not exists public.errors (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  page text check (char_length(page) <= 300),
  message text not null check (char_length(message) between 1 and 500),
  stack text check (char_length(stack) <= 2000),
  ua text check (char_length(ua) <= 300),
  resolved boolean not null default false
);
alter table public.errors enable row level security;
revoke all on public.errors from anon, authenticated;
grant insert (page, message, stack, ua) on public.errors to anon, authenticated;

alter table public.feedback add column if not exists resolved boolean not null default false;

-- 2. Админы (по email; вход через Supabase Auth)
create table if not exists public.admins (
  email text primary key check (email = lower(email) and email like '%@%'),
  added_by text,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;
revoke all on public.admins from anon, authenticated;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.admins a where a.email = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- права для вошедших админов
grant select, delete, update (resolved) on public.feedback to authenticated;
grant select, delete, update (resolved) on public.errors to authenticated;
grant select, insert (email, added_by), delete on public.admins to authenticated;

drop policy if exists errors_insert on public.errors;
create policy errors_insert on public.errors for insert to anon, authenticated with check (true);

drop policy if exists fb_admin_sel on public.feedback;
drop policy if exists fb_admin_upd on public.feedback;
drop policy if exists fb_admin_del on public.feedback;
create policy fb_admin_sel on public.feedback for select to authenticated using (public.is_admin());
create policy fb_admin_upd on public.feedback for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy fb_admin_del on public.feedback for delete to authenticated using (public.is_admin());

drop policy if exists er_admin_sel on public.errors;
drop policy if exists er_admin_upd on public.errors;
drop policy if exists er_admin_del on public.errors;
create policy er_admin_sel on public.errors for select to authenticated using (public.is_admin());
create policy er_admin_upd on public.errors for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy er_admin_del on public.errors for delete to authenticated using (public.is_admin());

drop policy if exists ad_sel on public.admins;
drop policy if exists ad_ins on public.admins;
drop policy if exists ad_del on public.admins;
create policy ad_sel on public.admins for select to authenticated using (public.is_admin());
create policy ad_ins on public.admins for insert to authenticated with check (public.is_admin());
-- себя удалить нельзя (чтобы не остаться без админов)
create policy ad_del on public.admins for delete to authenticated
  using (public.is_admin() and email <> lower(auth.jwt() ->> 'email'));

-- 3. Уведомления в Telegram
create or replace function public.notify_tg() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  tok text; chats text; c text; txt text; recent int;
begin
  select decrypted_secret into tok from vault.decrypted_secrets where name = 'tg_token';
  select decrypted_secret into chats from vault.decrypted_secrets where name = 'tg_chat';
  if tok is null or chats is null then return new; end if;

  if tg_table_name = 'errors' then
    -- антиспам: тот же текст за последний час или >10 ошибок за 10 минут — не шлём
    select count(*) into recent from public.errors
      where created_at > now() - interval '10 minutes' and id <> new.id;
    if recent >= 10 then return new; end if;
    if exists (select 1 from public.errors where message = new.message
               and id <> new.id and created_at > now() - interval '1 hour') then
      return new;
    end if;
    txt := '⚠️ Ошибка на сайте' || chr(10) || new.message || chr(10) ||
           'Страница: ' || coalesce(new.page, '—') || chr(10) ||
           coalesce(left(new.stack, 600), '');
  else
    select count(*) into recent from public.feedback where created_at > now() - interval '10 minutes';
    if recent > 20 then return new; end if;
    txt := '✉️ Сообщение с сайта' || chr(10) || new.message || chr(10) ||
           'Страница: ' || coalesce(new.page, '—');
  end if;

  foreach c in array string_to_array(chats, ',') loop
    perform net.http_post(
      url := 'https://api.telegram.org/bot' || tok || '/sendMessage',
      body := jsonb_build_object('chat_id', trim(c), 'text', left(txt, 3500), 'disable_web_page_preview', true),
      headers := '{"Content-Type":"application/json"}'::jsonb
    );
  end loop;
  return new;
exception when others then
  return new; -- уведомление не должно ломать вставку
end;
$$;
revoke execute on function public.notify_tg() from public, anon, authenticated;

drop trigger if exists errors_tg on public.errors;
create trigger errors_tg after insert on public.errors for each row execute function public.notify_tg();
drop trigger if exists feedback_tg on public.feedback;
create trigger feedback_tg after insert on public.feedback for each row execute function public.notify_tg();
