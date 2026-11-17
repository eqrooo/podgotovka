-- Анонимная статистика посещений: без IP, без email, без cookies.
-- vid — случайный id браузера (localStorage), sid — id сессии вкладки, pv — id просмотра страницы.
-- Время одного просмотра может прийти несколькими строками (при сворачивании вкладки), поэтому суммируем по pv.
create table if not exists public.visits (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  vid uuid not null,
  sid uuid not null,
  pv uuid not null,
  path text not null check (char_length(path) between 1 and 80),
  title text not null default '' check (char_length(title) <= 160),
  lang text not null default 'ru' check (lang in ('ru','en')),
  mobile boolean not null default false,
  seconds int not null default 0 check (seconds between 0 and 1800)
);
create index if not exists visits_created_idx on public.visits (created_at);
alter table public.visits enable row level security;
revoke all on public.visits from anon, authenticated;
grant insert (vid, sid, pv, path, title, lang, mobile, seconds) on public.visits to anon, authenticated;
drop policy if exists visits_insert on public.visits;
create policy visits_insert on public.visits for insert to anon, authenticated with check (true);

-- Сводка для админки (только для админов)
create or replace function public.site_stats(days int default 7)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare
  since timestamptz;
  tz constant text := 'Asia/Almaty';
  res jsonb;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  days := least(greatest(coalesce(days, 7), 1), 365);
  since := date_trunc('day', now() at time zone tz) at time zone tz - make_interval(days => days - 1);

  with v as (select * from public.visits where created_at >= since),
  pv as (  -- один просмотр страницы
    select pv, min(vid::text) vid, min(sid::text) sid, min(path) path, max(title) title, min(created_at) t,
           bool_or(mobile) mobile, min(lang) lang, sum(seconds) sec
    from v group by pv),
  ses as (select sid, sum(sec) sec, count(*) views from pv group by sid),
  firsts as (select vid, min(created_at) f from public.visits group by vid)
  select jsonb_build_object(
    'since', since,
    'online', (select count(distinct vid) from public.visits where created_at > now() - interval '5 minutes'),
    'visitors', (select count(distinct vid) from pv),
    'new_visitors', (select count(*) from firsts f where f.f >= since),
    'sessions', (select count(*) from ses),
    'views', (select count(*) from pv),
    'total_sec', (select coalesce(sum(sec), 0) from pv),
    'avg_session_sec', (select coalesce(round(avg(sec)), 0) from ses),
    'avg_views_per_session', (select coalesce(round(avg(views), 1), 0) from ses),
    'daily', (select coalesce(jsonb_agg(d order by d.day), '[]') from (
        select to_char(g.day, 'YYYY-MM-DD') as day,
               (select count(distinct vid) from pv where (pv.t at time zone tz)::date = g.day) visitors,
               (select count(*) from pv where (pv.t at time zone tz)::date = g.day) views,
               (select coalesce(sum(sec), 0) from pv where (pv.t at time zone tz)::date = g.day) sec
        from generate_series((since at time zone tz)::date, (now() at time zone tz)::date, interval '1 day') g(day)) d),
    'pages', (select coalesce(jsonb_agg(p), '[]') from (
        select path, max(title) title, count(*) views, count(distinct vid) visitors,
               round(avg(sec)) avg_sec, sum(sec) total_sec
        from pv group by path order by count(*) desc, sum(sec) desc limit 25) p),
    'subjects', (select coalesce(jsonb_agg(s), '[]') from (
        select split_part(path, '/', 1) subject, max(split_part(title, ' · ', 1)) title,
               count(*) views, count(distinct vid) visitors, sum(sec) total_sec
        from pv where path <> 'home' group by 1 order by count(*) desc) s),
    'sections', (select coalesce(jsonb_agg(s), '[]') from (
        select case
                 when path = 'home' then 'home'
                 when split_part(path, '/', 2) = '' then 'subject'
                 when split_part(path, '/', 2) = 'exam' then 'exam'
                 when split_part(path, '/', 2) ~ '^m[0-9]+$' then 'module'
                 when split_part(path, '/', 2) = 'cards' then 'allcards'
                 else coalesce(nullif(split_part(path, '/', 3), ''), 'notes') end kind,
               count(*) views, count(distinct vid) visitors, sum(sec) total_sec, round(avg(sec)) avg_sec
        from pv group by 1 order by count(*) desc) s),
    'lang', (select coalesce(jsonb_object_agg(lang, n), '{}') from (select lang, count(distinct vid) n from pv group by lang) x),
    'device', (select coalesce(jsonb_object_agg(case when mobile then 'mobile' else 'desktop' end, n), '{}')
               from (select mobile, count(distinct vid) n from pv group by mobile) x)
  ) into res;
  return res;
end;
$$;
revoke execute on function public.site_stats(int) from public, anon;
grant execute on function public.site_stats(int) to authenticated;

-- Старше года — удаляем при ежедневном пинге
create or replace function public.ping() returns text
language plpgsql volatile security definer set search_path = '' as $$
begin
  delete from public.visits where created_at < now() - interval '365 days';
  return 'ok';
end;
$$;
revoke execute on function public.ping() from public;
grant execute on function public.ping() to anon, authenticated;
