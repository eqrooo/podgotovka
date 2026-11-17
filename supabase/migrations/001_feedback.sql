-- Таблица для формы «Нашли ошибку?». Анонимы могут только ДОБАВЛЯТЬ строки; читать/менять/удалять — нет.
create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  page text not null default '' check (char_length(page) <= 200),
  message text not null check (char_length(message) between 5 and 2000)
);
alter table public.feedback enable row level security;
revoke all on public.feedback from anon, authenticated;
grant insert (page, message) on public.feedback to anon;
drop policy if exists "anon can insert feedback" on public.feedback;
create policy "anon can insert feedback" on public.feedback
  for insert to anon with check (char_length(message) between 5 and 2000 and char_length(page) <= 200);

-- Закрыть служебную функцию от анонимного вызова через API
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
