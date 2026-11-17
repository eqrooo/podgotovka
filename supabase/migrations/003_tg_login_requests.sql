-- Вход по коду из Telegram, привязка Telegram к админу, заявки на доступ с кнопками в боте.
-- Все новые таблицы доступны только service_role (Edge Functions); anon/authenticated к ним доступа не имеют.

alter table public.admins add column if not exists tg_chat bigint;

create table if not exists public.admin_requests (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  email text not null check (char_length(email) <= 200 and email like '%@%'),
  note text check (char_length(note) <= 300),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  decided_by text
);
create table if not exists public.tg_links (
  token text primary key,
  email text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.tg_login_log (
  id bigint generated always as identity primary key,
  email text not null,
  created_at timestamptz not null default now()
);
alter table public.admin_requests enable row level security;
alter table public.tg_links enable row level security;
alter table public.tg_login_log enable row level security;
revoke all on public.admin_requests, public.tg_links, public.tg_login_log from anon, authenticated;

-- секреты из Vault для Edge Functions (только service_role)
create or replace function public.tg_secret(p_name text) returns text
language sql stable security definer set search_path = '' as $$
  select decrypted_secret from vault.decrypted_secrets where name = p_name and p_name in ('tg_token','tg_chat','tg_webhook_secret');
$$;
revoke execute on function public.tg_secret(text) from public, anon, authenticated;
grant execute on function public.tg_secret(text) to service_role;

-- одноразовая ссылка для привязки Telegram (вызывает вошедший админ)
create or replace function public.create_tg_link() returns text
language plpgsql security definer set search_path = '' as $$
declare t text; e text := lower(auth.jwt() ->> 'email');
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
  delete from public.tg_links where created_at < now() - interval '15 minutes' or email = e;
  t := encode(extensions.gen_random_bytes(16), 'hex');
  insert into public.tg_links(token, email) values (t, e);
  return t;
end;
$$;
revoke execute on function public.create_tg_link() from public, anon;
grant execute on function public.create_tg_link() to authenticated;

-- обновление прав на admins: tg_chat меняет только сервер
revoke insert, update on public.admins from authenticated;
grant insert (email, added_by) on public.admins to authenticated;
