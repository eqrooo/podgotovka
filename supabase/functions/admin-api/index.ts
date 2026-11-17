// Публичный API админки:
//  login_code     — прислать код входа в Telegram админа (если Telegram привязан)
//  request_access — заявка на доступ: владельцу в бот приходят кнопки «Принять / Отклонить»
// Ответ всегда одинаковый {ok:true}, чтобы нельзя было узнать, кто админ.
import { SB, hdr, db, tg, enc, normEmail, isEmail } from '../_shared/sb.ts';

const ORIGINS = ['https://eqrooo.github.io', 'http://localhost:8765'];
function cors(req: Request) {
  const o = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': ORIGINS.includes(o) ? o : ORIGINS[0],
    'Access-Control-Allow-Headers': 'apikey, content-type, authorization, x-client-info',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}
const since = (ms: number) => new Date(Date.now() - ms).toISOString();

async function otpFor(email: string): Promise<string | null> {
  const gen = () => fetch(`${SB}/auth/v1/admin/generate_link`, { method: 'POST', headers: hdr(), body: JSON.stringify({ type: 'magiclink', email }) });
  let r = await gen();
  if (!r.ok) {
    await fetch(`${SB}/auth/v1/admin/users`, { method: 'POST', headers: hdr(), body: JSON.stringify({ email, email_confirm: true }) });
    r = await gen();
  }
  if (!r.ok) { console.error('generate_link', r.status, await r.text()); return null; }
  const j = await r.json();
  return j.email_otp ?? j.properties?.email_otp ?? null;
}

async function loginCode(email: string) {
  const [a] = await db(`admins?select=email,tg_chat&email=eq.${enc(email)}`);
  if (!a?.tg_chat) return;
  const recent = await db(`tg_login_log?select=id&email=eq.${enc(email)}&created_at=gte.${since(60_000)}`);
  if (recent.length) return;
  await db('tg_login_log', { method: 'POST', body: JSON.stringify({ email }), headers: { Prefer: 'return=minimal' } });
  await db(`tg_login_log?created_at=lt.${since(86_400_000)}`, { method: 'DELETE' });
  const code = await otpFor(email);
  if (!code) return;
  await tg('sendMessage', {
    chat_id: a.tg_chat,
    text: `🔐 Код для входа в админку: ${code}\n\nНикому его не сообщай. Если ты не входил — просто проигнорируй.`,
  });
}

async function requestAccess(email: string, note: string) {
  const [a] = await db(`admins?select=email&email=eq.${enc(email)}`);
  if (a) return;
  const dup = await db(`admin_requests?select=id&email=eq.${enc(email)}&created_at=gte.${since(86_400_000)}`);
  if (dup.length) return;
  const hour = await db(`admin_requests?select=id&created_at=gte.${since(3_600_000)}`);
  if (hour.length >= 10) return;
  const [row] = await db('admin_requests', { method: 'POST', body: JSON.stringify({ email, note: note || null }), headers: { Prefer: 'return=representation' } });
  const owners = await db('admins?select=tg_chat&tg_chat=not.is.null');
  const text = `🙋 Заявка на доступ к админке\nEmail: ${email}` + (note ? `\nКомментарий: ${note}` : '');
  for (const o of owners) {
    await tg('sendMessage', {
      chat_id: o.tg_chat, text,
      reply_markup: { inline_keyboard: [[{ text: '✅ Принять', callback_data: `ok:${row.id}` }, { text: '❌ Отклонить', callback_data: `no:${row.id}` }]] },
    });
  }
}

Deno.serve(async (req) => {
  const h = { ...cors(req), 'Content-Type': 'application/json' };
  if (req.method === 'OPTIONS') return new Response(null, { headers: h });
  if (req.method !== 'POST') return new Response('{"error":"method"}', { status: 405, headers: h });
  try {
    const b = await req.json().catch(() => ({}));
    const email = normEmail(b.email);
    if (!isEmail(email)) return new Response('{"error":"email"}', { status: 400, headers: h });
    if (b.action === 'login_code') await loginCode(email);
    else if (b.action === 'request_access') await requestAccess(email, String(b.note ?? '').trim().slice(0, 300));
    else return new Response('{"error":"action"}', { status: 400, headers: h });
  } catch (e) {
    console.error(e);
  }
  return new Response('{"ok":true}', { headers: h });
});
