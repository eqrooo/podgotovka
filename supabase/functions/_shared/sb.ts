// Общие помощники для Edge Functions: доступ к БД с service-ключом и к Telegram Bot API.
export const SB = Deno.env.get('SUPABASE_URL')!;
const SK = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

export function hdr(extra: Record<string, string> = {}): Record<string, string> {
  const h: Record<string, string> = { apikey: SK, 'Content-Type': 'application/json', ...extra };
  if (SK.startsWith('eyJ')) h.Authorization = 'Bearer ' + SK;
  return h;
}

export async function db(path: string, opt: { method?: string; body?: string; headers?: Record<string, string> } = {}) {
  const r = await fetch(`${SB}/rest/v1/${path}`, { method: opt.method || 'GET', body: opt.body, headers: hdr(opt.headers) });
  const t = await r.text();
  if (!r.ok) throw new Error(`db ${r.status}: ${t.slice(0, 200)}`);
  return t ? JSON.parse(t) : null;
}

const cache: Record<string, string> = {};
export async function secret(name: string): Promise<string> {
  if (!cache[name]) cache[name] = await db('rpc/tg_secret', { method: 'POST', body: JSON.stringify({ p_name: name }) });
  return cache[name];
}

export async function tg(method: string, body: unknown) {
  const tok = await secret('tg_token');
  const r = await fetch(`https://api.telegram.org/bot${tok}/${method}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  return r.json();
}

export const enc = encodeURIComponent;
export const normEmail = (e: unknown) => String(e ?? '').trim().toLowerCase().slice(0, 200);
export const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
