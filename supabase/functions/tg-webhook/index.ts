// Вебхук Telegram-бота: кнопки «Принять / Отклонить» заявок и привязка Telegram к админу (/start link_<token>).
// Запросы принимаются только с секретным заголовком, который Telegram ставит по setWebhook.
import { db, tg, secret, enc } from '../_shared/sb.ts';

const ok = () => new Response('ok');

async function adminByChat(chat: number) {
  const [a] = await db(`admins?select=email&tg_chat=eq.${chat}`);
  return a as { email: string } | undefined;
}

async function onCallback(cq: any) {
  const admin = await adminByChat(cq.from.id);
  if (!admin) return tg('answerCallbackQuery', { callback_query_id: cq.id, text: 'Нет прав' });
  const [act, idStr] = String(cq.data || '').split(':');
  const id = Number(idStr);
  if (!Number.isInteger(id) || (act !== 'ok' && act !== 'no')) return tg('answerCallbackQuery', { callback_query_id: cq.id });
  const [r] = await db(`admin_requests?select=id,email,status&id=eq.${id}`);
  if (!r || r.status !== 'pending') {
    return tg('answerCallbackQuery', { callback_query_id: cq.id, text: 'Заявка уже обработана' });
  }
  if (act === 'ok') {
    await db('admins?on_conflict=email', { method: 'POST', body: JSON.stringify({ email: r.email, added_by: admin.email }), headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' } });
  }
  await db(`admin_requests?id=eq.${id}`, { method: 'PATCH', body: JSON.stringify({ status: act === 'ok' ? 'approved' : 'rejected', decided_by: admin.email }), headers: { Prefer: 'return=minimal' } });
  const verdict = act === 'ok' ? `✅ Принято (${admin.email}). Теперь ${r.email} может войти в админку по письму.` : `❌ Отклонено (${admin.email})`;
  await tg('editMessageText', { chat_id: cq.message.chat.id, message_id: cq.message.message_id, text: (cq.message.text || '') + '\n\n' + verdict });
  return tg('answerCallbackQuery', { callback_query_id: cq.id, text: act === 'ok' ? 'Админ добавлен' : 'Отклонено' });
}

async function onMessage(m: any) {
  if (m.chat?.type !== 'private') return;
  const chat = m.chat.id, text = String(m.text || '');
  const link = text.match(/^\/start link_([0-9a-f]{32})$/);
  if (link) {
    const [l] = await db(`tg_links?select=email,created_at&token=eq.${link[1]}`);
    await db(`tg_links?token=eq.${link[1]}`, { method: 'DELETE' });
    if (!l || Date.now() - new Date(l.created_at).getTime() > 15 * 60_000) {
      return tg('sendMessage', { chat_id: chat, text: 'Ссылка устарела. Создай новую в админке.' });
    }
    await db(`admins?tg_chat=eq.${chat}`, { method: 'PATCH', body: JSON.stringify({ tg_chat: null }), headers: { Prefer: 'return=minimal' } });
    await db(`admins?email=eq.${enc(l.email)}`, { method: 'PATCH', body: JSON.stringify({ tg_chat: chat }), headers: { Prefer: 'return=minimal' } });
    return tg('sendMessage', { chat_id: chat, text: `✅ Telegram привязан к ${l.email}. Теперь код для входа в админку будет приходить сюда.` });
  }
  const admin = await adminByChat(chat);
  return tg('sendMessage', {
    chat_id: chat,
    text: admin
      ? `Привет! Сюда приходят ошибки сайта, сообщения из формы, заявки на доступ и коды входа.\nАдминка: https://eqrooo.github.io/podgotovka/admin.html`
      : 'Это служебный бот сайта «Подготовка по предметам».',
  });
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('no', { status: 405 });
  const want = await secret('tg_webhook_secret');
  if (!want || req.headers.get('x-telegram-bot-api-secret-token') !== want) return new Response('forbidden', { status: 401 });
  try {
    const u = await req.json();
    if (u.callback_query) await onCallback(u.callback_query);
    else if (u.message) await onMessage(u.message);
  } catch (e) {
    console.error(e);
  }
  return ok();
});
