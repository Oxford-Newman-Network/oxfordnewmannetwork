-- Oxford Newman Network — run this once in the Supabase SQL editor.
-- It creates the table the website reads from, the picture store, and the rules
-- that let anyone read the site but only signed-in editors change it.

create table if not exists public.content (
  key         text primary key,
  value       jsonb not null,
  updated_at  timestamptz not null default now()
);

alter table public.content enable row level security;

drop policy if exists "anyone may read the site" on public.content;
create policy "anyone may read the site"
  on public.content for select
  to anon, authenticated
  using (true);

drop policy if exists "editors may write" on public.content;
create policy "editors may write"
  on public.content for all
  to authenticated
  using (true)
  with check (true);

-- Pictures uploaded from the admin page live here.
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

drop policy if exists "anyone may view pictures" on storage.objects;
create policy "anyone may view pictures"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'images');

drop policy if exists "editors may upload pictures" on storage.objects;
create policy "editors may upload pictures"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'images');

drop policy if exists "editors may replace pictures" on storage.objects;
create policy "editors may replace pictures"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'images');
