// Проверка данных: node tools/validate.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..');const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'content.js'),'utf8'),ctx);
const S=[],T={};ctx.registerSubject=s=>{S.push(s);T[s.id]=T[s.id]||[]};ctx.registerTopic=t=>(T[t.subject]=T[t.subject]||[]).push(t);
ctx.addQuiz=(s,id,it)=>{const t=T[s].find(x=>x.id===id);if(!t)throw Error('no topic '+id);t.quiz=(t.quiz||[]).concat(it)};
let err=0;const bad=m=>{err++;console.log('✗',m)};
const enSeen={};
ctx.addEn=(s,id,d)=>{const t=(T[s]||[]).find(x=>x.id===id);const k=s+'/'+id;if(!t){bad('addEn: no topic '+k);return}enSeen[k]=1;
 for(const f of ['title','summary','body'])if(!d[f])bad(k+' en: no '+f);
 if((d.practice||[]).length!==(t.practice||[]).length)bad(`${k} en: practice ${(d.practice||[]).length} != ${(t.practice||[]).length}`);
 if((d.quiz||[]).length!==(t.quiz||[]).length)bad(`${k} en: quiz ${(d.quiz||[]).length} != ${(t.quiz||[]).length}`);
 (d.practice||[]).forEach((p,i)=>{if(!p||!p.q||!p.a)bad(`${k} en: practice ${i+1} empty`)});
 (d.quiz||[]).forEach((q,i)=>{if(!q||!q.q||!q.solution||!Array.isArray(q.options)||q.options.length!==4)bad(`${k} en: quiz ${i+1} incomplete`)});};
for(const f of ctx.CONTENT){vm.runInContext(fs.readFileSync(path.join(root,f.split('?')[0]),'utf8'),ctx,{filename:f})}
let tot={t:0,q:0,p:0,g:0};
for(const s of S){const ts=T[s.id];const ids=new Set();
 for(const t of ts){tot.t++;if(ids.has(t.id))bad(s.id+' dup '+t.id);ids.add(t.id);
  if(!s.modules.find(m=>m.n===t.module))bad(`${s.id}/${t.id} module ${t.module}`);
    (t.quiz||[]).forEach((q,i)=>{tot.q++;if(!Array.isArray(q.options)||q.options.length!==4)bad(`${s.id}/${t.id} q${i+1} options`);
   if(!(q.answer>=0&&q.answer<q.options.length))bad(`${s.id}/${t.id} q${i+1} answer ${q.answer}`);
   const o=q.options.map(x=>JSON.stringify(x));if(new Set(o).size!==o.length)bad(`${s.id}/${t.id} q${i+1} dup options`);
   if(!q.solution)bad(`${s.id}/${t.id} q${i+1} no solution`)});
  (t.practice||[]).forEach((p,i)=>{tot.p++;if(!p.q||!p.a)bad(`${s.id}/${t.id} p${i+1}`)});
  (t.glossary||[]).forEach((g,i)=>{tot.g++;if(!Array.isArray(g)||!g[0]||!g[1])bad(`${s.id}/${t.id} g${i+1}`)});
  if(!(t.quiz||[]).length)bad(`${s.id}/${t.id} no quiz`);
 }
 const pos=[0,0,0,0];ts.forEach(t=>(t.quiz||[]).forEach(q=>pos[q.answer]++));
 console.log(s.id.padEnd(5),ts.length,'topics, answer positions',pos.join('/'));
}
const noEn=[];for(const s of S)if((s.langs||[]).includes('en')&&s.id!=='hm')for(const t of T[s.id])if(!enSeen[s.id+'/'+t.id])noEn.push(s.id+'/'+t.id);
if(noEn.length)console.log('без перевода:',noEn.length,noEn.join(' '));
// версии конспекта «Коротко» и «Простыми словами»: <предмет>/lv/<тема>.js
let lvN=0;
let lvEnN=0;
for(const s of S)for(const sub of ['','en']){const dir=path.join(root,s.id,'lv',sub);if(!fs.existsSync(dir))continue;
 for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.js'))){const id=f.slice(0,-3),k=s.id+'/'+(sub?'en/':'')+id;let got=null;
  ctx.addLevels=(sid,tid,d,lg)=>{if(sid!==s.id||tid!==id)bad(k+' lv: addLevels('+sid+','+tid+') в чужом файле');if((lg||'')!==sub)bad(k+' lv: язык '+lg);got=d};
  try{vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),ctx,{filename:k+'/lv'})}catch(e){bad(k+' lv: '+e.message);continue}
  if(!T[s.id].find(t=>t.id===id))bad(k+' lv: нет такой темы');
  if(!got){bad(k+' lv: нет addLevels');continue}if(sub)lvEnN++;else lvN++;
  for(const [fld,min,max] of [['short',300,4500],['simple',2000,25000]]){const h=got[fld];
   if(typeof h!=='string'||!h.trim()){bad(`${k} lv.${fld}: пусто`);continue}
   if(h.length<min||h.length>max)bad(`${k} lv.${fld}: длина ${h.length} (нужно ${min}–${max})`);
   const cnt=re=>(h.match(re)||[]).length;
   if(cnt(/\\\(/g)!==cnt(/\\\)/g))bad(`${k} lv.${fld}: не закрыта формула \\( \\)`);
   if(cnt(/\\\[/g)!==cnt(/\\\]/g))bad(`${k} lv.${fld}: не закрыта формула \\[ \\]`);
   for(const tg of ['div','ol','ul','li','table','p','h2','h3','b'])if(cnt(new RegExp('<'+tg+'[\\s>]','g'))!==cnt(new RegExp('</'+tg+'>','g')))bad(`${k} lv.${fld}: не закрыт тег <${tg}>`);
   if(sub&&/[а-яё]/i.test(h))bad(`${k} lv.${fld}: русский текст в английской версии`);
   if(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(h))bad(`${k} lv.${fld}: эмодзи`);
   if(/давай разбер|в этой статье|готовься с нами|надеюсь,? (теперь )?стало понятно/i.test(h))bad(`${k} lv.${fld}: шаблонная фраза`);
   if(/^\s*\d+\.\s/m.test(h.replace(/\\\[[\s\S]*?\\\]/g,'')))bad(`${k} lv.${fld}: шаги строками «1. …» вместо <ol>`);
  }}}
console.log('версии конспекта:',lvN,'тем, на английском:',lvEnN);
const lvMiss=[];for(const s of S){const d=path.join(root,s.id,'lv');if(fs.existsSync(d))for(const f of fs.readdirSync(d).filter(f=>f.endsWith('.js')))if(!fs.existsSync(path.join(d,'en',f)))lvMiss.push(s.id+'/'+f.slice(0,-3))}
if(lvMiss.length)console.log('версии без английского:',lvMiss.length);
console.log(tot,err?err+' errors':'OK');process.exit(err?1:0);
