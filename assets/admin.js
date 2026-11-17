/* Админка: вход через Supabase Auth (письмо со ссылкой/кодом), доступ — только email из таблицы admins (проверяет RLS на сервере). */
(function(){
'use strict';
const cfg=window.SITE_CONFIG||{},URL_=cfg.supabaseUrl,KEY=cfg.supabaseKey;
const $=s=>document.querySelector(s);
const SK='adm_sess';
let sess=null,tab='feedback';

function el(tag,props,...kids){const e=document.createElement(tag);if(props)for(const k in props){if(k==='class')e.className=props[k];else if(k==='on')for(const ev in props.on)e.addEventListener(ev,props.on[ev]);else e[k]=props[k]}
  for(const c of kids){if(c==null)continue;e.append(c instanceof Node?c:document.createTextNode(String(c)))}return e}
function show(id){for(const x of ['login','denied','panel'])$('#'+x).hidden=x!==id;$('#logout').hidden=id==='login';$('#who').textContent=sess?sess.email:''}
function status(msg,kind){const s=$('#loginSt');s.textContent=msg;s.className='st '+(kind||'')}
function load(){try{return JSON.parse(localStorage.getItem(SK))}catch(_){return null}}
function save(s){sess=s;try{s?localStorage.setItem(SK,JSON.stringify(s)):localStorage.removeItem(SK)}catch(_){}}

function fromTokenResponse(j){
  const email=(j.user&&j.user.email)||(sess&&sess.email)||'';
  return {access_token:j.access_token,refresh_token:j.refresh_token,expires_at:Date.now()+((j.expires_in||3600)-60)*1000,email:email.toLowerCase()};
}
async function auth(path,body){
  const r=await fetch(URL_+'/auth/v1/'+path,{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json'},body:JSON.stringify(body)});
  const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.msg||j.error_description||j.message||('HTTP '+r.status));return j;
}
async function token(){
  if(!sess)return null;
  if(Date.now()<sess.expires_at)return sess.access_token;
  try{save(fromTokenResponse(await auth('token?grant_type=refresh_token',{refresh_token:sess.refresh_token})));return sess.access_token}
  catch(_){save(null);show('login');return null}
}
async function api(path,opt={}){
  const t=await token();if(!t)throw new Error('Нужно войти заново');
  const r=await fetch(URL_+'/rest/v1/'+path,{...opt,headers:{'apikey':KEY,'Authorization':'Bearer '+t,'Content-Type':'application/json',...(opt.headers||{})}});
  if(r.status===401){save(null);show('login');throw new Error('Сессия истекла')}
  if(!r.ok){const j=await r.json().catch(()=>({}));throw new Error(j.message||('HTTP '+r.status))}
  return r.status===204?null:r.json().catch(()=>null);
}

/* ----- вход ----- */
$('#loginForm').onsubmit=async e=>{
  e.preventDefault();const email=$('#email').value.trim().toLowerCase();if(!email)return;
  $('#sendLink').disabled=true;status('Отправляю письмо…');
  try{
    const back=location.origin+location.pathname;
    await auth('otp?redirect_to='+encodeURIComponent(back),{email,create_user:true});
    status('Письмо отправлено на '+email+'. Открой ссылку из письма на этом устройстве или введи код.','good');
    $('#codeForm').hidden=false;
  }catch(err){status('Не удалось отправить: '+err.message,'bad')}
  finally{setTimeout(()=>{$('#sendLink').disabled=false},30000)}
};
$('#codeForm').onsubmit=async e=>{
  e.preventDefault();const email=$('#email').value.trim().toLowerCase(),code=$('#code').value.trim();if(!email||!code)return;
  try{const j=await auth('verify',{type:'email',email,token:code});save(fromTokenResponse(j));start()}
  catch(err){status('Код не подошёл: '+err.message,'bad')}
};
$('#logout').onclick=async()=>{
  try{const t=sess&&sess.access_token;if(t)await fetch(URL_+'/auth/v1/logout',{method:'POST',headers:{'apikey':KEY,'Authorization':'Bearer '+t}})}catch(_){}
  save(null);show('login');
};

/* ссылка из письма возвращает токены в #fragment */
function takeHash(){
  if(!location.hash.includes('access_token'))return false;
  const p=new URLSearchParams(location.hash.slice(1));
  history.replaceState(null,'',location.pathname);
  if(p.get('error_description')){status(p.get('error_description'),'bad');return false}
  let email='';try{email=JSON.parse(atob(p.get('access_token').split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).email||''}catch(_){}
  save({access_token:p.get('access_token'),refresh_token:p.get('refresh_token'),expires_at:Date.now()+((+p.get('expires_in')||3600)-60)*1000,email:email.toLowerCase()});
  return true;
}
if(location.hash.includes('error_description')){const p=new URLSearchParams(location.hash.slice(1));history.replaceState(null,'',location.pathname);status(p.get('error_description'),'bad')}

/* ----- панель ----- */
async function isAdmin(){
  try{const r=await api('rpc/is_admin',{method:'POST',body:'{}'});return r===true}catch(_){return false}
}
async function start(){
  if(!sess){show('login');return}
  if(!await isAdmin()){show('denied');return}
  show('panel');refresh();
}
document.querySelectorAll('.adm-tabs button').forEach(b=>b.onclick=()=>{
  tab=b.dataset.tab;document.querySelectorAll('.adm-tabs button').forEach(x=>x.classList.toggle('on',x===b));refresh();
});
$('#reload').onclick=()=>refresh();
$('#showResolved').onchange=()=>refresh();

function fmt(d){try{return new Date(d).toLocaleString('ru-RU',{dateStyle:'short',timeStyle:'short'})}catch(_){return d}}
function pageLink(p){
  if(!p)return el('span',null,'—');
  const href=p.startsWith('#')?'./'+p:p.startsWith('/')?p:'./';
  return el('a',{href,target:'_blank',rel:'noopener'},p);
}
async function counts(){
  for(const t of ['feedback','errors']){
    try{const r=await fetch(URL_+'/rest/v1/'+t+'?select=id&resolved=eq.false',{headers:{'apikey':KEY,'Authorization':'Bearer '+await token(),'Prefer':'count=exact','Range':'0-0'}});
      const n=+((r.headers.get('content-range')||'').split('/')[1]||0);$('#cnt-'+t).textContent=n?String(n):''}catch(_){}
  }
}
async function refresh(){
  const list=$('#list');list.replaceChildren(el('div',{class:'adm-empty'},'Загрузка…'));
  $('#addAdmin').hidden=tab!=='admins';
  $('.adm-bar label').hidden=tab==='admins';
  try{
    if(tab==='admins')return renderAdmins(list,await api('admins?select=*&order=created_at'));
    const f=$('#showResolved').checked?'':'&resolved=eq.false';
    const rows=await api(tab+'?select=*&order=created_at.desc&limit=200'+f);
    renderRows(list,rows);counts();
  }catch(err){list.replaceChildren(el('div',{class:'adm-empty'},'Ошибка: '+err.message))}
}
function renderRows(list,rows){
  if(!rows.length){list.replaceChildren(el('div',{class:'adm-empty'},tab==='errors'?'Ошибок нет 🎉':'Сообщений нет'));return}
  list.replaceChildren(...rows.map(r=>{
    const card=el('div',{class:'adm-item'+(r.resolved?' done':'')},
      el('div',{class:'meta'},el('span',null,fmt(r.created_at)),pageLink(r.page),r.resolved?el('span',null,'✓ решено'):null),
      el('div',{class:'msg'},r.message),
      r.stack?el('pre',null,r.stack):null,
      r.ua?el('div',{class:'meta'},r.ua):null,
      el('div',{class:'acts'},
        el('button',{class:'btn ghost sm',on:{click:async()=>{await act(()=>api(tab+'?id=eq.'+r.id,{method:'PATCH',body:JSON.stringify({resolved:!r.resolved})}))}}},r.resolved?'Вернуть':'Решено'),
        el('button',{class:'btn ghost sm',on:{click:async()=>{if(confirm('Удалить запись навсегда?'))await act(()=>api(tab+'?id=eq.'+r.id,{method:'DELETE'}))}}},'Удалить')
      ));
    return card;
  }));
}
function renderAdmins(list,rows){
  list.replaceChildren(...rows.map(r=>el('div',{class:'adm-item'},
    el('div',{class:'meta'},el('span',null,'добавлен '+fmt(r.created_at)),r.added_by?el('span',null,'кем: '+r.added_by):null),
    el('div',{class:'msg'},r.email+(r.email===sess.email?' (это ты)':'')),
    r.email===sess.email?null:el('div',{class:'acts'},el('button',{class:'btn ghost sm',on:{click:async()=>{if(confirm('Убрать '+r.email+' из админов?'))await act(()=>api('admins?email=eq.'+encodeURIComponent(r.email),{method:'DELETE'}))}}},'Убрать'))
  )));
}
async function act(fn){try{await fn();refresh()}catch(err){alert('Не получилось: '+err.message)}}
$('#addAdmin').onsubmit=async e=>{
  e.preventDefault();const email=$('#newAdmin').value.trim().toLowerCase();if(!email.includes('@'))return;
  await act(()=>api('admins',{method:'POST',headers:{'Prefer':'return=minimal'},body:JSON.stringify({email,added_by:sess.email})}));
  $('#newAdmin').value='';
};

if(!URL_||!KEY){document.body.textContent='Не настроен config.js';return}
takeHash();sess=sess||load();start();
})();
