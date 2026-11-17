-- Пустой запрос для ежедневного «пинга» (GitHub Actions), чтобы бесплатный проект Supabase не засыпал.
create or replace function public.ping() returns text
language sql stable set search_path = '' as $$ select 'ok'::text $$;
revoke execute on function public.ping() from public;
grant execute on function public.ping() to anon, authenticated;
