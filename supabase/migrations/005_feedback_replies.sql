-- Ответы на сообщения без регистрации.
-- Браузер отправителя создаёт случайный секретный ticket (uuid) и хранит его у себя.
-- Прочитать ответ можно только зная ticket — через функцию feedback_replies.
alter table public.feedback add column if not exists ticket uuid;
alter table public.feedback add column if not exists reply text check (reply is null or char_length(reply) between 1 and 2000);
alter table public.feedback add column if not exists replied_at timestamptz;
alter table public.feedback add column if not exists replied_by text;
create index if not exists feedback_ticket_idx on public.feedback (ticket) where ticket is not null;

grant insert (page, message, ticket) on public.feedback to anon, authenticated;
grant update (resolved, reply, replied_at, replied_by) on public.feedback to authenticated;

-- Отправитель получает только ответы на свои сообщения (по своим ticket), не больше 50 за раз
create or replace function public.feedback_replies(tickets uuid[])
returns table (id bigint, message text, reply text, replied_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select f.id, left(f.message, 300), f.reply, f.replied_at
  from public.feedback f
  where f.ticket = any (tickets[1:50]) and f.reply is not null
  order by f.replied_at desc
$$;
revoke execute on function public.feedback_replies(uuid[]) from public;
grant execute on function public.feedback_replies(uuid[]) to anon, authenticated;

-- Номер сообщения в уведомлении: на него можно ответить прямо в Telegram (Reply)
create or replace function public.notify_tg() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  tok text; chats text; c text; txt text; recent int;
begin
  select decrypted_secret into tok from vault.decrypted_secrets where name = 'tg_token';
  select decrypted_secret into chats from vault.decrypted_secrets where name = 'tg_chat';
  if tok is null or chats is null then return new; end if;

  if tg_table_name = 'errors' then
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
    txt := '✉️ Сообщение с сайта #' || new.id || chr(10) || new.message || chr(10) ||
           'Страница: ' || coalesce(new.page, '—') ||
           case when new.ticket is not null
             then chr(10) || chr(10) || '↩️ Ответь на это сообщение (Reply) — автор увидит ответ на сайте.'
             else '' end;
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
  return new;
end;
$$;
revoke execute on function public.notify_tg() from public, anon, authenticated;
