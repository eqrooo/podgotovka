/* Админка: вход через Supabase Auth (письмо со ссылкой/кодом), доступ — только email из таблицы admins (проверяет RLS на сервере). */
(function(){
'use strict';
const cfg=window.SITE_CONFIG||{},URL_=cfg.supabaseUrl,KEY=cfg.supabaseKey;
const $=s=>document.querySelector(s);
const SK='adm_sess';
let sess=null,tab='feedback';

function el(tag,props,...kids){const e=document.createElement(tag);if(props)for(const k in props){if(k==='class')e.className=props[k];else if(k==='style')e.style.cssText=props[k];else if(k==='on')for(const ev in props.on)e.addEventListener(ev,props.on[ev]);else e[k]=props[k]}
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
async function fn(body){
  const r=await fetch(URL_+'/functions/v1/admin-api',{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(!r.ok)throw new Error('HTTP '+r.status);return r.json();
}
const getEmail=()=>{const e=$('#email').value.trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){status('Введи корректный email','bad');return ''}return e};
function cooldown(btn){btn.disabled=true;setTimeout(()=>{btn.disabled=false},60000)}
$('#loginForm').onsubmit=async e=>{
  e.preventDefault();const email=getEmail();if(!email)return;
  cooldown($('#sendTg'));status('Отправляю код в Telegram…');
  try{await fn({action:'login_code',email});
    status('Если к этому email привязан Telegram, код уже в боте. Не пришёл за минуту — нажми «Письмо на email».','good');
    $('#codeForm').hidden=false;$('#code').focus();
  }catch(err){status('Не удалось: '+err.message,'bad')}
};
$('#sendLink').onclick=async()=>{
  const email=getEmail();if(!email)return;
  cooldown($('#sendLink'));status('Отправляю письмо…');
  try{
    const back=location.origin+location.pathname;
    await auth('otp?redirect_to='+encodeURIComponent(back),{email,create_user:true});
    status('Письмо отправлено на '+email+'. Открой ссылку из письма на этом устройстве или введи код.','good');
    $('#codeForm').hidden=false;
  }catch(err){status('Не удалось отправить: '+err.message,'bad')}
};
$('#codeForm').onsubmit=async e=>{
  e.preventDefault();const email=getEmail(),code=$('#code').value.replace(/\D/g,'');if(!email||!code)return;
  try{let j;try{j=await auth('verify',{type:'email',email,token:code})}catch(_){j=await auth('verify',{type:'magiclink',email,token:code})}
    save(fromTokenResponse(j));start()}
  catch(err){status('Код не подошёл или устарел','bad')}
};
$('#reqLink').onclick=e=>{e.preventDefault();$('#reqForm').hidden=false;$('#reqNote').focus()};
async function sendRequest(email,note,st){
  try{await fn({action:'request_access',email,note});st('Заявка отправлена. Когда её примут, войди по письму на email.','good')}
  catch(err){st('Не удалось: '+err.message,'bad')}
}
$('#reqForm').onsubmit=async e=>{e.preventDefault();const email=getEmail();if(!email)return;e.target.querySelector('button').disabled=true;
  await sendRequest(email,$('#reqNote').value.trim(),status)};
$('#reqForm2').onsubmit=async e=>{e.preventDefault();if(!sess)return;e.target.querySelector('button').disabled=true;
  await sendRequest(sess.email,$('#reqNote2').value.trim(),(m,k)=>{const s=$('#reqSt2');s.textContent=m;s.className='st '+(k||'')})};
$('#linkTg').onclick=async()=>{
  const s=$('#linkSt');
  try{const t=await api('rpc/create_tg_link',{method:'POST',body:'{}'});
    const url='https://t.me/'+(cfg.tgBot||'')+'?start=link_'+t;
    window.open(url,'_blank','noopener');
    s.className='st good';s.textContent='';s.append('Открой бота и нажми «Start». Ссылка действует 15 минут: ',el('a',{href:url,target:'_blank',rel:'noopener'},'открыть бота'));
  }catch(err){s.className='st bad';s.textContent='Не получилось: '+err.message}
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
  $('#adminTools').hidden=tab!=='admins';
  $('.adm-bar label').hidden=tab==='admins'||tab==='stats';
  try{
    if(tab==='admins')return renderAdmins(list,await api('admins?select=*&order=created_at'));
    if(tab==='stats')return renderStats(list,await api('rpc/site_stats',{method:'POST',body:JSON.stringify({days:statDays})}));
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
      tab==='feedback'?replyBox(r):null,
      el('div',{class:'acts'},
        el('button',{class:'btn ghost sm',on:{click:async()=>{await act(()=>api(tab+'?id=eq.'+r.id,{method:'PATCH',body:JSON.stringify({resolved:!r.resolved})}))}}},r.resolved?'Вернуть':'Решено'),
        el('button',{class:'btn ghost sm',on:{click:async()=>{if(confirm('Удалить запись навсегда?'))await act(()=>api(tab+'?id=eq.'+r.id,{method:'DELETE'}))}}},'Удалить')
      ));
    return card;
  }));
}
/* ответ автору: он увидит его на сайте (браузер автора хранит секретный ticket сообщения) */
function replyBox(r){
  if(!r.ticket)return el('div',{class:'meta'},'Ответить нельзя: сообщение отправлено старой версией сайта');
  const box=el('div',{class:'adm-reply'});
  const ta=el('textarea',{rows:3,maxLength:2000,placeholder:'Ответ автору — он увидит его на сайте',value:r.reply||''});
  const btn=el('button',{class:'btn primary sm',type:'button'},r.reply?'Изменить ответ':'Ответить');
  btn.onclick=async()=>{const t=ta.value.trim();if(!t)return;btn.disabled=true;
    await act(()=>api('feedback?id=eq.'+r.id,{method:'PATCH',body:JSON.stringify({reply:t,replied_at:new Date().toISOString(),replied_by:sess.email,resolved:true})}));
    btn.disabled=false};
  if(r.reply)box.append(el('div',{class:'meta'},'Отвечено '+fmt(r.replied_at)+(r.replied_by?' · '+r.replied_by:'')));
  box.append(ta,btn);return box;
}
/* ----- статистика ----- */
let statDays=7;
const KIND={home:'Главная',subject:'Страница предмета',notes:'Конспект',prac:'Задачи',quiz:'Тест по теме',cards:'Карточки по теме',gloss:'Словарь',glossary:'Словарь',module:'Тест модуля',exam:'Тест по предмету',allcards:'Все карточки предмета'};
function dur(sec){sec=Math.round(+sec||0);if(sec<60)return sec+' с';const m=Math.floor(sec/60);if(m<60)return m+' мин'+(sec%60&&m<10?' '+sec%60+' с':'');const h=Math.floor(m/60);return h+' ч '+(m%60)+' мин'}
function table(head,rows){
  return el('div',{class:'st-tw'},el('table',{class:'st-table'},
    el('thead',null,el('tr',null,...head.map(h=>el('th',null,h)))),
    el('tbody',null,...rows.map(r=>el('tr',null,...r.map(c=>el('td',null,c)))))));
}
function bar(v,max){const w=max?Math.max(2,Math.round(v/max*100)):0;return el('div',{class:'st-bar'},el('span',{style:'width:'+w+'%'}),el('b',null,String(v)))}
function renderStats(list,d){
  const per=el('div',{class:'st-per'},...[[1,'Сегодня'],[7,'7 дней'],[30,'30 дней'],[90,'90 дней'],[365,'Год']].map(([n,t])=>
    el('button',{class:'btn sm '+(statDays===n?'primary':'ghost'),on:{click:()=>{statDays=n;refresh()}}},t)));
  const kpi=(v,t,sub)=>el('div',{class:'st-kpi'},el('b',null,String(v)),el('span',null,t),sub?el('small',null,sub):null);
  const dev=d.device||{},lng=d.lang||{};
  const kpis=el('div',{class:'st-kpis'},
    kpi(d.online,'сейчас на сайте','за последние 5 минут'),
    kpi(d.visitors,'посетителей',d.new_visitors+' новых'),
    kpi(d.sessions,'заходов',(d.avg_views_per_session||0)+' стр. за заход'),
    kpi(d.views,'просмотров страниц'),
    kpi(dur(d.avg_session_sec),'среднее время за заход'),
    kpi(dur(d.total_sec),'всего времени на сайте'));
  const daily=d.daily||[],mx=Math.max(1,...daily.map(x=>x.visitors));
  const days=el('div',{class:'st-days'},...daily.slice(-60).map(x=>el('div',{class:'st-day',title:x.day+': '+x.visitors+' чел., '+x.views+' просм., '+dur(x.sec)},
    el('span',{style:'height:'+Math.round(x.visitors/mx*100)+'%'}),el('i',null,x.day.slice(8)))));
  const subs=d.subjects||[],ms=Math.max(1,...subs.map(x=>x.views));
  const secs=d.sections||[],mk=Math.max(1,...secs.map(x=>x.views));
  const pages=d.pages||[];
  const empty=!d.views;
  list.replaceChildren(per,kpis,
    empty?el('div',{class:'adm-empty'},'Пока нет данных за этот период. Статистика собирается с момента обновления сайта.'):el('div',null,
    el('h3',{class:'st-h'},'Посетители по дням'),days,
    el('h3',{class:'st-h'},'Предметы — что открывают чаще'),
    table(['Предмет','Просмотры','Людей','Время'],subs.map(x=>[x.title||x.subject,bar(x.views,ms),String(x.visitors),dur(x.total_sec)])),
    el('h3',{class:'st-h'},'Что выбирают внутри предметов'),
    table(['Раздел','Просмотры','Людей','В среднем','Всего'],secs.map(x=>[KIND[x.kind]||x.kind,bar(x.views,mk),String(x.visitors),dur(x.avg_sec),dur(x.total_sec)])),
    el('h3',{class:'st-h'},'Популярные страницы'),
    table(['Страница','Просмотры','Людей','В среднем'],pages.map(x=>[el('a',{href:'./#/'+(x.path==='home'?'':x.path),target:'_blank',rel:'noopener'},x.title||x.path),String(x.views),String(x.visitors),dur(x.avg_sec)])),
    el('h3',{class:'st-h'},'Устройства и язык'),
    el('div',{class:'st-kpis'},kpi(dev.mobile||0,'с телефона'),kpi(dev.desktop||0,'с компьютера'),kpi(lng.ru||0,'на русском'),kpi(lng.en||0,'на английском'))),
    el('p',{class:'meta'},'Статистика анонимная: без IP, email и cookies. Время считается, только пока вкладка открыта на экране. Дни — по времени Астаны.'));
}
function renderAdmins(list,rows){
  list.replaceChildren(...rows.map(r=>el('div',{class:'adm-item'},
    el('div',{class:'meta'},el('span',null,'добавлен '+fmt(r.created_at)),r.added_by?el('span',null,'кем: '+r.added_by):null,
      r.tg_chat?el('span',{class:'tgok'},'📱 Telegram привязан'):el('span',null,'Telegram не привязан')),
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
