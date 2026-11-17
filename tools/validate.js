// Проверка данных: node tools/validate.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..');const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'content.js'),'utf8'),ctx);
const S=[],T={};ctx.registerSubject=s=>{S.push(s);T[s.id]=T[s.id]||[]};ctx.registerTopic=t=>(T[t.subject]=T[t.subject]||[]).push(t);
ctx.addQuiz=(s,id,it)=>{const t=T[s].find(x=>x.id===id);if(!t)throw Error('no topic '+id);t.quiz=(t.quiz||[]).concat(it)};
let err=0;const bad=m=>{err++;console.log('✗',m)};
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
console.log(tot,err?err+' errors':'OK');process.exit(err?1:0);
