/* Движок сайта: роутинг, конспекты, практика, тесты, карточки. Данные — в папках предметов. */
(function(){
'use strict';
window.SUBJECTS=[];window.TOPICS={};
window.registerSubject=function(s){SUBJECTS.push(s);TOPICS[s.id]=TOPICS[s.id]||[];};
window.registerTopic=function(t){(TOPICS[t.subject]=TOPICS[t.subject]||[]).push(t);};
window.addQuiz=function(subj,id,items){const t=(TOPICS[subj]||[]).find(x=>x.id===id);if(t)t.quiz=(t.quiz||[]).concat(items);};
/* английский перевод темы: addEn('econ','t01',{title,summary,body,practice:[{q,a}],quiz:[{q,options,solution}]}) — по индексам */
function setEn(o,k,v){if(v==null||v==='')return;const c=o[k];if(c==null)return;if(typeof c==='string')o[k]={ru:c,en:v};else c.en=v}
window.addEn=function(subj,id,d){const t=(TOPICS[subj]||[]).find(x=>x.id===id);if(!t)return;
  ['title','summary','body'].forEach(k=>setEn(t,k,d[k]));
  (d.practice||[]).forEach((p,i)=>{const o=(t.practice||[])[i];if(o&&p){setEn(o,'q',p.q);setEn(o,'a',p.a)}});
  (d.quiz||[]).forEach((q,i)=>{const o=(t.quiz||[])[i];if(!o||!q)return;setEn(o,'q',q.q);setEn(o,'solution',q.solution);
    (q.options||[]).forEach((v,j)=>{if(o.options[j]!=null&&v!=null&&v!==L0(o.options[j]))setEn(o.options,j,v)})});};
const L0=o=>typeof o==='string'?o:(o&&o.ru);

const UI={
 ru:{home:'Главная',notes:'Конспект',prac:'Задания',quiz:'Тест',cards:'Карточки',gloss:'Словарь',show:'Показать решение',hide:'Скрыть решение',
  learned:'Выучено',mark:'Отметить как выученное',module:'Модуль',lecture:'Тема',progress:'Выучено тем',topics:'тем',
  heroT1:'Готовься к сессии',heroT2:'умнее',
  heroLead:'Конспекты лекций, задачи с подробными решениями, интерактивные тесты и карточки для заучивания терминов — по всем предметам в одном месте.',
  statSubj:'предметов',statTopics:'тем',statQ:'вопросов в тестах',statW:'слов в карточках',choose:'Выбери предмет',
  f1:['📘','Конспекты','Структурированная теория с примерами и типичными ошибками.'],f2:['✍️','Задания','Новые задачи с пошаговыми решениями под спойлером.'],
  f3:['🎯','Тесты','Выбор ответа, мгновенная проверка и разбор каждого вопроса.'],f4:['🃏','Карточки','Учи термины: переворачивай, отмечай, повторяй трудные.'],
  allCards:'Все карточки предмета',exam:'Итоговый тест по предмету',modTest:'Тест по модулю',topicTest:'Тест по теме',qs:'вопр.',q:'Вопрос',of:'из',next:'Дальше',finish:'Результат',
  right:'Верно!',wrong:'Неверно',again:'Пройти ещё раз',best:'Лучший результат',solution:'Решение',
  res:[[90,'Отлично! Ты готов(а) 🎉'],[70,'Хорошо! Повтори пару тем'],[50,'Неплохо, но стоит повторить'],[0,'Перечитай конспект и попробуй снова']],
  know:'Знаю',dont:'Повторить',flip:'нажми, чтобы перевернуть',dir1:'EN → RU',dir2:'RU → EN',shuffle:'Перемешать',restart:'Сначала',
  left:'осталось',cardsDone:'Все карточки пройдены!',cardsStat:'С первого раза',noData:'Для этой темы пока нет материалов.',
  term:'Термин',trans:'Перевод',fb:'Нашли ошибку?',fbT:'Сообщить об ошибке',fbPh:'Что не так? Например: «Тест, вопрос 3 — неверный ответ»',fbSend:'Отправить',fbCancel:'Отмена',
  fbOk:'Спасибо! Сообщение отправлено.',fbErr:'Не удалось отправить. Попробуй позже.',fbShort:'Напиши хотя бы пару слов.',fbHint:'Регистрация не нужна. Если на сообщение ответят, ответ появится здесь, на сайте, когда ты снова его откроешь (на этом же устройстве и в этом браузере).',fbReT:'Ответ на твоё сообщение',fbYou:'Твоё сообщение:',fbReOk:'Понятно',
  foot:'Учебные материалы для подготовки к экзаменам',menu:'Темы'},
 en:{home:'Home',notes:'Notes',prac:'Practice',quiz:'Quiz',cards:'Flashcards',gloss:'Glossary',show:'Show solution',hide:'Hide solution',
  learned:'Learned',mark:'Mark as learned',module:'Module',lecture:'Topic',progress:'Topics learned',topics:'topics',
  heroT1:'Prepare for exams',heroT2:'smarter',
  heroLead:'Lecture notes, problems with step-by-step solutions, interactive quizzes and flashcards — every subject in one place.',
  statSubj:'subjects',statTopics:'topics',statQ:'quiz questions',statW:'flashcard terms',choose:'Pick a subject',
  f1:['📘','Notes','Structured theory with examples and common mistakes.'],f2:['✍️','Practice','New problems with step-by-step hidden solutions.'],
  f3:['🎯','Quizzes','Multiple choice, instant feedback and a worked solution for each.'],f4:['🃏','Flashcards','Learn terms: flip, mark, repeat the hard ones.'],
  allCards:'All subject flashcards',exam:'Final subject quiz',modTest:'Module quiz',topicTest:'Topic quiz',qs:'q.',q:'Question',of:'of',next:'Next',finish:'Results',
  right:'Correct!',wrong:'Wrong',again:'Try again',best:'Best score',solution:'Solution',
  res:[[90,'Excellent! You are ready 🎉'],[70,'Good! Review a couple of topics'],[50,'Not bad, but review more'],[0,'Re-read the notes and try again']],
  know:'Got it',dont:'Repeat',flip:'tap to flip',dir1:'EN → RU',dir2:'RU → EN',shuffle:'Shuffle',restart:'Restart',
  left:'left',cardsDone:'All cards done!',cardsStat:'First try',noData:'No materials for this topic yet.',
  term:'Term',trans:'Translation',fb:'Found a mistake?',fbT:'Report a mistake',fbPh:'What is wrong? E.g. “Quiz, question 3 — wrong answer”',fbSend:'Send',fbCancel:'Cancel',
  fbOk:'Thank you! Message sent.',fbErr:'Could not send. Try later.',fbShort:'Please write a few words.',fbHint:'No sign-up needed. If someone replies, the answer will appear here on the site next time you open it (on this device and browser).',fbReT:'Reply to your message',fbYou:'Your message:',fbReOk:'Got it',
  foot:'Study materials for exam preparation',menu:'Topics'}
};
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let lang=store.get('lang','ru');
const done=store.get('done',{});
const best=store.get('best',{});
const $=s=>document.querySelector(s);
const curLang=()=>(route.s&&!hasEn(subj(route.s)))?'ru':lang;
const U=()=>UI[curLang()];
const L=o=>{if(o==null)return '';if(typeof o==='string')return o;const l=curLang();return o[l]??o.ru??o.en??''};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const subj=id=>SUBJECTS.find(s=>s.id===id);
const topicsOf=id=>(TOPICS[id]||[]).slice().sort((a,b)=>a.num-b.num);
const hasEn=s=>s&&s.langs&&s.langs.includes('en');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let route={};
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- MathJax ---------- */
function typeset(el){
  if(!el)return;
  if(window.MathJax&&MathJax.typesetPromise){MathJax.typesetClear&&MathJax.typesetClear([el]);MathJax.typesetPromise([el]).catch(()=>{})}
  else setTimeout(()=>typeset(el),300);
}

/* ---------- routing ---------- */
function parse(){
  let h=decodeURIComponent(location.hash.replace(/^#\/?/,''));
  const legacy=h.match(/^([a-z]+)-([a-z0-9]+)$/);if(legacy)h=legacy[1]+'/'+legacy[2];
  const [s,t,tab]=h.split('/');
  return {s:subj(s)?s:null,t:t||null,tab:tab||'notes'};
}
function go(path){location.hash='#/'+path}

/* ---------- chrome ---------- */
function renderTop(){
  const c=$('#crumbs');c.innerHTML='';
  const add=(txt,path)=>{if(c.children.length){const s=document.createElement('span');s.className='sep';s.textContent='/';c.appendChild(s)}
    const b=document.createElement('button');b.textContent=txt;b.onclick=()=>go(path);c.appendChild(b)};
  if(route.s){const s=subj(route.s);add(L(s.title),s.id);
    if(/^m\d+$/.test(route.t||'')){const m=s.modules.find(x=>'m'+x.n===route.t);if(m)add(U().modTest+' '+m.n,s.id+'/'+route.t)}
    else if(route.t&&!['cards','exam'].includes(route.t)){const t=topicsOf(s.id).find(x=>x.id===route.t);if(t)add(L(t.title),s.id+'/'+t.id)}
    else if(route.t==='cards')add(U().cards,s.id+'/cards');else if(route.t==='exam')add(U().quiz,s.id+'/exam');}
  const s=subj(route.s);$('#lang').hidden=route.s?!hasEn(s):false;
  $('#lang-ru').setAttribute('aria-pressed',lang==='ru');$('#lang-en').setAttribute('aria-pressed',lang==='en');
  $('#menuBtn').hidden=!route.s;
  $('#fbOpen').textContent=U().fb;
  document.documentElement.lang=curLang();
}

/* ---------- home ---------- */
function countAll(){let t=0,q=0,w=0;SUBJECTS.forEach(s=>topicsOf(s.id).forEach(x=>{t++;q+=(x.quiz||[]).length;w+=(x.glossary||[]).length}));return{t,q,w}}
function renderHome(v){
  const u=U(),n=countAll();
  const syms=['∑','π','∫','√','Δ','∞','λ','≈','%','₸','{ }','01'];
  v.innerHTML=`<section class="hero"><span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
   ${reduced?'':syms.map((s,i)=>`<span class="sym" style="left:${(i*8.3+3)%96}%;top:${100+((i*37)%40)}%;animation-duration:${16+(i%5)*4}s;animation-delay:-${i*2.1}s;font-size:${28+(i%4)*10}px">${s}</span>`).join('')}
   <div class="hero-inner">
   <h1>${u.heroT1} <span class="grad">${u.heroT2}</span></h1><p class="lead">${u.heroLead}</p>
   <div class="stats">${[[SUBJECTS.length,u.statSubj],[n.t,u.statTopics],[n.q,u.statQ],[n.w,u.statW]].map(([k,l])=>`<div class="stat"><b data-count="${k}">0</b><span>${l}</span></div>`).join('')}</div></div></section>
   <div class="wrap"><h2 class="section-title reveal">${u.choose}</h2>
   <div class="subjects stagger">${SUBJECTS.map(s=>{const ts=topicsOf(s.id);const d=ts.filter(t=>done[s.id+'/'+t.id]).length;const p=ts.length?Math.round(d/ts.length*100):0;
     return `<button class="scard" data-s="${s.id}"><div class="ic">${s.icon||'📚'}</div><h3>${L(s.title)}</h3><p>${L(s.meta)}</p>
     <div class="meta"><span>${ts.length} ${u.topics}</span><span class="ring" style="--p:${p}"><span>${p}%</span></span></div></button>`}).join('')}</div>
   <div class="features">${[u.f1,u.f2,u.f3,u.f4].map(f=>`<div class="feat reveal"><div class="fi">${f[0]}</div><h4>${f[1]}</h4><p>${f[2]}</p></div>`).join('')}</div></div>`;
  v.querySelectorAll('.scard').forEach(b=>{b.onclick=()=>go(b.dataset.s);
    b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.setProperty('--mx',(e.clientX-r.left)+'px');b.style.setProperty('--my',(e.clientY-r.top)+'px')}});
  v.querySelectorAll('[data-count]').forEach(countUp);
}
function countUp(el){const to=+el.dataset.count;if(reduced){el.textContent=to;return}const t0=performance.now(),d=1200;
  const step=now=>{const k=Math.min(1,(now-t0)/d);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}

/* ---------- subject shell ---------- */
function renderSide(s){
  const side=$('#side');const ts=topicsOf(s.id);const n=ts.filter(t=>done[s.id+'/'+t.id]).length;const u=U();
  side.innerHTML=`<div class="sh"><span class="ic">${s.icon||'📚'}</span><b>${L(s.title)}</b></div>
   <div class="prog">${u.progress}: <b>${n} / ${ts.length}</b><div class="bar"><i data-w="${ts.length?n/ts.length*100:0}"></i></div></div>
   <div class="tools"><button data-go="${s.id}/cards">🃏 ${u.allCards}</button><button data-go="${s.id}/exam">🎯 ${u.exam}</button></div>
   ${s.modules.map(m=>{const mt=ts.filter(t=>t.module===m.n);if(!mt.length)return '';return `<h3>${u.module} ${m.n} · ${L(m.title)}</h3><button class="mtest" data-go="${s.id}/m${m.n}" aria-current="${route.t==='m'+m.n}">🎯 ${u.modTest}</button>`+mt.map(t=>
     `<button class="tlink" data-go="${s.id}/${t.id}" aria-current="${t.id===route.t}"><span class="n">${String(t.num).padStart(2,'0')}</span><span>${L(t.title)}</span><span class="ok ${done[s.id+'/'+t.id]?'done':''}"></span></button>`).join('')}).join('')}`;
  side.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{go(b.dataset.go);document.body.classList.remove('menu-open')});
  requestAnimationFrame(()=>side.querySelectorAll('.bar i').forEach(i=>i.style.width=i.dataset.w+'%'));
}
function renderSubject(v,s){
  const u=U(),ts=topicsOf(s.id);
  v.innerHTML=`<div class="eyebrow"><span>${ts.length} ${u.topics}</span></div><h1>${L(s.title)}</h1><p class="lead">${L(s.meta)}</p>
   <div class="actions-row"><button class="btn primary" data-go="${s.id}/cards">🃏 ${u.allCards}</button><button class="btn ghost" data-go="${s.id}/exam">🎯 ${u.exam}</button></div>
   <div class="mods stagger">${s.modules.map(m=>{const mt=ts.filter(t=>t.module===m.n);if(!mt.length)return '';return `<div class="mod"><h4>${u.module} ${m.n}. ${L(m.title)}</h4>${mt.map(t=>
     `<div class="trow"><button data-go="${s.id}/${t.id}"><span class="n">${String(t.num).padStart(2,'0')}</span><span>${L(t.title)}${done[s.id+'/'+t.id]?' ✓':''}</span></button>${(t.quiz||[]).length?`<button class="qbtn" data-go="${s.id}/${t.id}/quiz" title="${u.topicTest}">🎯 ${t.quiz.length}</button>`:''}</div>`).join('')}<button class="btn ghost mbtn" data-go="${s.id}/m${m.n}">🎯 ${u.modTest} · ${mt.reduce((a,t)=>a+(t.quiz||[]).length,0)} ${u.qs}</button></div>`}).join('')}</div>`;
  v.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
}

/* ---------- topic ---------- */
function renderTopic(v,s,t){
  const u=U(),key=s.id+'/'+t.id,gl=t.glossary||[],pr=t.practice||[],qz=t.quiz||[];
  const tabs=[['notes',u.notes,null],['prac',u.prac,pr.length],['quiz',u.quiz,qz.length],['cards',u.cards,gl.length],['gloss',u.gloss,gl.length]].filter(x=>x[2]===null||x[2]>0);
  if(!tabs.find(x=>x[0]===route.tab))route.tab='notes';
  const mod=s.modules.find(m=>m.n===t.module);
  v.innerHTML=`<div class="eyebrow"><span>${u.module} ${t.module}${mod?' · '+L(mod.title):''}</span><span>· ${u.lecture} ${t.num}</span></div>
   <h1>${L(t.title)}</h1><p class="lead">${L(t.summary)}</p>
   <div class="tabs" role="tablist">${tabs.map(([id,lab,c])=>`<button class="tab" role="tab" data-tab="${id}" aria-selected="${route.tab===id}">${lab}${c!=null?`<span class="c">${c}</span>`:''}</button>`).join('')}
   <span class="ind"></span><button class="done-btn ${done[key]?'on':''}" id="doneBtn">${done[key]?'✓ '+u.learned:u.mark}</button></div><div id="tbody" class="page-enter"></div>`;
  v.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{history.replaceState(null,'','#/'+key+'/'+b.dataset.tab);route.tab=b.dataset.tab;renderTopic(v,s,t)});
  moveInd();
  $('#doneBtn').onclick=e=>{done[key]=!done[key];store.set('done',done);const b=e.currentTarget;b.classList.toggle('on',done[key]);b.textContent=done[key]?'✓ '+u.learned:u.mark;
    b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');if(done[key])confetti(b);renderSide(s)};
  const body=$('#tbody');
  if(route.tab==='notes'){body.innerHTML=`<div class="notes">${L(t.body)||`<p>${u.noData}</p>`}</div>`;
    body.querySelectorAll('.notes>h2,.notes>.box,.notes>.tw,.notes>p,.notes>ul,.notes>ol').forEach(el=>el.classList.add('reveal'));observe(body)}
  else if(route.tab==='prac')renderPractice(body,pr);
  else if(route.tab==='quiz')renderQuiz(body,qz,key);
  else if(route.tab==='cards')renderCards(body,gl.map(g=>({g,src:''})),key);
  else body.innerHTML=`<div class="tw"><table><thead><tr><th>${u.term}</th><th>${u.trans}</th></tr></thead><tbody>${gl.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}${r[2]?`<br><small style="color:var(--muted)">${r[2]}</small>`:''}</td></tr>`).join('')}</tbody></table></div>`;
  typeset(body);
}
function moveInd(){const sel=document.querySelector('.tab[aria-selected="true"]'),ind=document.querySelector('.tabs .ind');if(!sel||!ind)return;ind.style.left=sel.offsetLeft+'px';ind.style.width=sel.offsetWidth+'px'}

function renderPractice(body,pr){
  const u=U();
  body.innerHTML=pr.map((p,i)=>`<div class="prob reveal"><div class="q"><span class="i">${i+1}</span><div>${L(p.q)}</div></div>
   <button class="reveal-btn" aria-expanded="false">💡 <span>${u.show}</span><span class="ch">▾</span></button>
   <div class="sol"><div><div class="a">${L(p.a)}</div></div></div></div>`).join('');
  body.querySelectorAll('.reveal-btn').forEach(b=>b.onclick=()=>{const o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',o);
    b.querySelector('span').textContent=o?u.hide:u.show;b.nextElementSibling.classList.toggle('open',o)});
  observe(body);
}

/* ---------- quiz ---------- */
function renderQuiz(body,items,key,isExam){
  const u=U();let i=0,score=0;const log=[];
  if(!items.length){body.innerHTML=`<p>${u.noData}</p>`;return}
  const order=items.map(q=>{const idx=shuffle(q.options.map((_,k)=>k));return{q,idx}});
  const letters='ABCDEF';
  function show(){
    const {q,idx}=order[i];
    body.innerHTML=`<div class="quiz-top"><span class="count">${u.q} ${i+1} ${u.of} ${order.length}</span><div class="bar"><i style="width:${i/order.length*100}%"></i></div><span class="count">✓ ${score}</span></div>
     <div class="qcard enter"><div class="qq">${L(q.q)}</div><div class="opts">${idx.map((k,j)=>`<button class="opt" data-k="${k}"><span class="l">${letters[j]}</span><span>${L(q.options[k])}</span></button>`).join('')}</div>
     <div class="qactions"><button class="btn ghost" id="solBtn">💡 ${u.show}</button><span class="verdict" id="verdict"></span><button class="btn primary" id="nextBtn" disabled>${i+1<order.length?u.next+' →':u.finish}</button></div>
     <div class="sol" id="qsol"><div><div class="a" style="margin-left:0"><b>${u.solution}.</b> ${L(q.solution)}</div></div></div></div>`;
    requestAnimationFrame(()=>{const bi=body.querySelector('.quiz-top .bar i');if(bi)bi.style.width=((i+1)/order.length*100)+'%'});
    let answered=false;
    body.querySelectorAll('.opt').forEach(b=>b.onclick=e=>{
      if(answered)return;answered=true;rip(b,e);
      const k=+b.dataset.k,ok=k===q.answer;if(ok)score++;log.push({q,ok});
      body.querySelectorAll('.opt').forEach(o=>{o.disabled=true;const kk=+o.dataset.k;if(kk===q.answer)o.classList.add('right');else if(o===b)o.classList.add('wrong');else o.classList.add('dim')});
      const vd=$('#verdict');vd.textContent=ok?u.right:u.wrong;vd.className='verdict '+(ok?'good':'bad');
      if(!ok)openSol();$('#nextBtn').disabled=false;$('#nextBtn').focus({preventScroll:true});
      body.querySelector('.quiz-top .count:last-child').textContent='✓ '+score;
    });
    const openSol=()=>{const s=$('#qsol');s.classList.add('open');$('#solBtn').setAttribute('aria-expanded','true')};
    $('#solBtn').onclick=()=>{const s=$('#qsol');const o=!s.classList.contains('open');s.classList.toggle('open',o);$('#solBtn').innerHTML='💡 '+(o?u.hide:u.show)};
    $('#nextBtn').onclick=()=>{i++;if(i<order.length)show();else result()};
    typeset(body);
  }
  function result(){
    const pct=Math.round(score/order.length*100);const msg=u.res.find(r=>pct>=r[0])[1];
    const prev=best[key]||0;if(pct>prev){best[key]=pct;store.set('best',best)}
    body.innerHTML=`<div class="qcard enter result"><div class="big" data-count="${pct}">0</div><div style="font-size:28px;color:var(--muted)">%</div>
     <div class="msg">${score} / ${order.length} · ${msg}</div><div class="best">${u.best}: ${Math.max(prev,pct)}%</div><br>
     <button class="btn primary" id="again">↻ ${u.again}</button>
     <div class="review">${log.map((r,j)=>`<div class="ri"><b style="color:${r.ok?'var(--good)':'var(--bad)'}">${r.ok?'✓':'✗'}</b><div>${j+1}. ${L(r.q.q)}${r.ok?'':`<div class="a" style="margin:8px 0 0;padding:10px 14px;border-radius:10px;background:var(--bg-soft)"><b>${L(r.q.options[r.q.answer])}</b> — ${L(r.q.solution)}</div>`}</div></div>`).join('')}</div></div>`;
    body.querySelectorAll('[data-count]').forEach(countUp);
    $('#again').onclick=()=>renderQuiz(body,isExam?isExam():items,key,isExam);
    if(pct>=70)confetti();typeset(body);window.scrollTo({top:0,behavior:'smooth'});
  }
  show();
}
function examItems(sid){return shuffle(topicsOf(sid).flatMap(t=>t.quiz||[])).slice(0,20)}

/* ---------- flashcards ---------- */
function renderCards(body,deck,key){
  const u=U();if(!deck.length){body.innerHTML=`<p>${u.noData}</p>`;return}
  let dir=store.get('fcdir',1),queue=shuffle(deck),firstOk=0,seen=new Set(),total=deck.length;
  function draw(anim){
    if(!queue.length){body.innerHTML=`<div class="fc-wrap fc-done page-enter"><div class="result"><div class="big">🎉</div><div class="msg">${u.cardsDone}<br>${u.cardsStat}: <b>${firstOk} / ${total}</b></div>
      <button class="btn primary" id="fcR">↻ ${u.restart}</button></div></div>`;$('#fcR').onclick=()=>renderCards(body,deck,key);confetti();return}
    const c=queue[0],g=c.g,front=dir===1?g[0]:g[1],back=dir===1?g[1]:g[0];
    body.innerHTML=`<div class="fc-wrap"><div class="fc-meta"><button class="chip" data-d="1" aria-pressed="${dir===1}">${u.dir1}</button><button class="chip" data-d="2" aria-pressed="${dir===2}">${u.dir2}</button>
      <button class="chip" id="fcS">🔀 ${u.shuffle}</button><span>${queue.length} ${u.left}</span></div>
      <div class="bar" style="width:min(560px,100%)"><i style="width:${(total-queue.length)/total*100}%"></i></div>
      <div class="fc-scene"><div class="fc ${anim||''}" id="fc" tabindex="0" role="button" aria-label="${u.flip}">
        <div class="face front">${c.src?`<span class="src">${esc(c.src)}</span>`:''}<div class="w">${front}</div><span class="hint">${u.flip}</span></div>
        <div class="face back"><div class="w">${back}</div>${g[2]&&dir===1?`<div style="margin-top:8px;color:var(--muted);font-size:14px">${g[2]}</div>`:''}</div></div></div>
      <div class="fc-btns"><button class="btn no" id="fcNo">↺ ${u.dont} <span class="kbd">←</span></button><button class="btn yes" id="fcYes">✓ ${u.know} <span class="kbd">→</span></button></div></div>`;
    const fc=$('#fc');fc.onclick=()=>fc.classList.toggle('flip');
    body.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{dir=+b.dataset.d;store.set('fcdir',dir);draw('in')});
    $('#fcS').onclick=()=>{queue=shuffle(queue);draw('in')};
    $('#fcYes').onclick=()=>next(true);$('#fcNo').onclick=()=>next(false);
    typeset(body);
  }
  function next(ok){
    const fc=$('#fc');const c=queue.shift();if(ok&&!seen.has(c))firstOk++;seen.add(c);
    if(!ok)queue.splice(Math.min(queue.length,3+(Math.random()*3|0)),0,c);
    fc.classList.add(ok?'out-r':'out-l');setTimeout(()=>draw('in'),reduced?0:320);
  }
  cardKeys=e=>{if(!document.getElementById('fc'))return;if(e.target.closest('textarea,input,select'))return;
    if(e.key==='ArrowRight')next(true);else if(e.key==='ArrowLeft')next(false);else if(e.key===' '||e.key==='Enter'){e.preventDefault();$('#fc').classList.toggle('flip')}};
  draw('in');
}
let cardKeys=null;document.addEventListener('keydown',e=>{if(cardKeys)cardKeys(e)});

/* ---------- effects ---------- */
let io;function observe(root){if(reduced||!('IntersectionObserver'in window)){root.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));return}
  io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -40px 0px'});
  root.querySelectorAll('.reveal:not(.in)').forEach(e=>io.observe(e))}
function rip(el,e){if(reduced)return;const r=el.getBoundingClientRect(),s=Math.max(r.width,r.height),d=document.createElement('span');d.className='ripple';
  d.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;el.appendChild(d);setTimeout(()=>d.remove(),650)}
function confetti(from){
  if(reduced)return;const c=document.createElement('canvas');c.className='confetti';document.body.appendChild(c);const x=c.getContext('2d');
  const W=c.width=innerWidth,H=c.height=innerHeight;const r=from?from.getBoundingClientRect():{left:W/2,top:H/3,width:0,height:0};
  const ox=r.left+r.width/2,oy=r.top+r.height/2;const cols=['#0a2463','#1e4fd8','#3e7bfa','#5cc8ff','#ffffff','#9cc0ff'];
  const ps=Array.from({length:from?60:160},()=>({x:ox,y:oy,vx:(Math.random()-.5)*(from?10:18),vy:-Math.random()*(from?9:16)-3,s:4+Math.random()*6,c:cols[Math.random()*cols.length|0],a:Math.random()*6,va:(Math.random()-.5)*.3}));
  let t=0;(function f(){x.clearRect(0,0,W,H);ps.forEach(p=>{p.vy+=.35;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.a+=p.va;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.strokeStyle='#cfdcfb';
    x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});if(++t<140)requestAnimationFrame(f);else c.remove()})();
}
function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},2600)}

/* ---------- feedback (Supabase, insert-only) ---------- */
function newTicket(){
  if(crypto.randomUUID)return crypto.randomUUID();
  const b=crypto.getRandomValues(new Uint8Array(16));b[6]=b[6]&15|64;b[8]=b[8]&63|128;
  const h=[...b].map(x=>x.toString(16).padStart(2,'0')).join('');return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);
}
/* ответы админа на сообщения из формы: спрашиваем по своим ticket, показываем новые */
let fbChecked=0;
async function checkReplies(){
  const tickets=store.get('fbTickets',[]),cfg=window.SITE_CONFIG||{};
  if(!tickets.length||!cfg.supabaseUrl||Date.now()-fbChecked<60000)return;fbChecked=Date.now();
  try{const r=await fetch(cfg.supabaseUrl+'/rest/v1/rpc/feedback_replies',{method:'POST',headers:{'apikey':cfg.supabaseKey,'Content-Type':'application/json'},body:JSON.stringify({tickets})});
    if(!r.ok)return;const seen=store.get('fbSeen',{}),fresh=(await r.json()).filter(x=>seen[x.id]!==x.replied_at);
    if(!fresh.length)return;const dlg=$('#fbReDlg');if(dlg.open)return;
    $('#fbReTitle').textContent=U().fbReT;$('#fbReOk').textContent=U().fbReOk;
    $('#fbReList').replaceChildren(...fresh.map(x=>{const d=document.createElement('div'),q=document.createElement('div'),a=document.createElement('div');
      q.className='q';q.textContent=U().fbYou+' '+x.message;a.className='a';a.textContent=x.reply;d.append(q,a);return d}));
    dlg.onclose=()=>{const s=store.get('fbSeen',{});fresh.forEach(x=>s[x.id]=x.replied_at);store.set('fbSeen',s)};
    dlg.showModal();
  }catch(_){}
}
function initFeedback(){
  checkReplies();document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkReplies()});
  const dlg=$('#fbDlg'),u=()=>U();
  $('#fbOpen').onclick=()=>{$('#fbTitle').textContent=u().fbT;$('#fbText').placeholder=u().fbPh;$('#fbSend').textContent=u().fbSend;$('#fbCancel').textContent=u().fbCancel;$('#fbHint').textContent=u().fbHint;$('#fbSt').textContent='';dlg.showModal()};
  $('#fbCancel').onclick=()=>dlg.close();
  $('#fbForm').onsubmit=async e=>{
    e.preventDefault();const st=$('#fbSt');const text=$('#fbText').value.trim();
    if($('#fbHp').value)return dlg.close();
    if(text.length<5){st.textContent=u().fbShort;st.style.color='var(--bad)';return}
    const last=store.get('fbLast',0);if(Date.now()-last<30000){st.textContent=u().fbErr;st.style.color='var(--bad)';return}
    const cfg=window.SITE_CONFIG||{};if(!cfg.supabaseUrl||!cfg.supabaseKey){st.textContent=u().fbErr;return}
    $('#fbSend').disabled=true;
    // ticket — случайный секрет этого браузера: по нему потом можно получить ответ, без регистрации
    const ticket=newTicket();
    try{const r=await fetch(cfg.supabaseUrl+'/rest/v1/feedback',{method:'POST',headers:{'apikey':cfg.supabaseKey,'Content-Type':'application/json','Prefer':'return=minimal'},
        body:JSON.stringify({page:location.hash.slice(0,200)||'#/',message:text.slice(0,2000),ticket})});
      if(!r.ok)throw 0;store.set('fbTickets',[ticket,...store.get('fbTickets',[])].slice(0,50));store.set('fbLast',Date.now());$('#fbText').value='';dlg.close();toast(u().fbOk)}
    catch(_){st.textContent=u().fbErr;st.style.color='var(--bad)'}finally{$('#fbSend').disabled=false}
  };
}

/* ---------- render ---------- */
function render(){
  route=parse();
  renderTop();cardKeys=null;
  const v=$('#view'),shell=$('#shell');
  if(!route.s){shell.classList.remove('on');$('#home').hidden=false;shell.hidden=true;renderHome($('#home'));$('#home').classList.remove('page-enter');void $('#home').offsetWidth;$('#home').classList.add('page-enter');observe($('#home'));return}
  $('#home').hidden=true;shell.hidden=false;
  const s=subj(route.s);renderSide(s);
  if(!route.t)renderSubject(v,s);
  else if(route.t==='cards'){v.innerHTML=`<div class="eyebrow"><span>${L(s.title)}</span></div><h1>🃏 ${U().allCards}</h1><div id="tbody"></div>`;
    renderCards($('#tbody'),topicsOf(s.id).flatMap(t=>(t.glossary||[]).map(g=>({g,src:t.num+'. '+L(t.title).slice(0,40)}))),s.id+'/cards')}
  else if(route.t==='exam'){v.innerHTML=`<div class="eyebrow"><span>${L(s.title)}</span></div><h1>🎯 ${U().exam}</h1><div id="tbody"></div>`;renderQuiz($('#tbody'),examItems(s.id),s.id+'/exam',()=>examItems(s.id))}
  else if(/^m\d+$/.test(route.t)){const m=s.modules.find(x=>'m'+x.n===route.t);const gen=()=>shuffle(topicsOf(s.id).filter(t=>t.module===(m&&m.n)).flatMap(t=>t.quiz||[])).slice(0,25);
    v.innerHTML=`<div class="eyebrow"><span>${U().module} ${m?m.n:''}</span></div><h1>🎯 ${U().modTest}${m?': '+L(m.title):''}</h1><div id="tbody"></div>`;renderQuiz($('#tbody'),gen(),s.id+'/'+route.t,gen)}
  else{const t=topicsOf(s.id).find(x=>x.id===route.t);if(t)renderTopic(v,s,t);else renderSubject(v,s)}
  v.classList.remove('page-enter');void v.offsetWidth;v.classList.add('page-enter');
  typeset(v);
}
function boot(){
  $('#lang-ru').onclick=()=>{lang='ru';store.set('lang',lang);render()};
  $('#lang-en').onclick=()=>{lang='en';store.set('lang',lang);render()};
  $('#brand').onclick=()=>go('');
  $('#menuBtn').onclick=()=>document.body.classList.toggle('menu-open');
  addEventListener('hashchange',()=>{render();scrollTo(0,0)});
  addEventListener('resize',moveInd);
  addEventListener('scroll',()=>{const h=document.documentElement;$('#scrollProg').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%'},{passive:true});
  $('#footText').textContent=U().foot;
  initFeedback();render();
}
/* load content scripts listed in manifest sequentially, then boot */
(async function load(){
  // параллельная загрузка, исполнение по порядку (async=false)
  // data-l: ошибки этих файлов errlog не отправляет сам — сообщаем только если не помогли повторы
  const add=(src,async)=>new Promise(res=>{const s=document.createElement('script');s.src=src;s.async=async;s.dataset.l='1';s.onload=()=>res(true);s.onerror=()=>{s.remove();res(false)};document.head.appendChild(s)});
  const list=window.CONTENT||[],ok=await Promise.all(list.map(src=>add(src,false)));
  // мобильный интернет иногда обрывает один из файлов — пробуем ещё дважды, по порядку
  for(let i=0;i<list.length;i++){if(ok[i])continue;let good=false;
    for(let k=1;k<=2&&!good;k++){await new Promise(r=>setTimeout(r,800*k));good=await add(list[i]+(list[i].includes('?')?'&':'?')+'r='+k,true)}
    if(!good){console.warn('fail',list[i]);if(window.reportError2)window.reportError2('Не загрузился файл (после 3 попыток): '+location.origin+location.pathname.replace(/[^/]*$/,'')+list[i],navigator.onLine===false?'offline':'')}}
  boot();
})();
})();
