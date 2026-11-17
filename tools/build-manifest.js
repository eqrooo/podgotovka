// Собирает content.js — список файлов данных в порядке загрузки. Запуск: node tools/build-manifest.js
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const order=['hm','inf','pol','eco','econ'];
const dirs=fs.readdirSync(root).filter(d=>fs.existsSync(path.join(root,d,'subject.js')));
dirs.sort((a,b)=>(order.indexOf(a)+1||99)-(order.indexOf(b)+1||99));
const files=[];
for(const d of dirs){
  const fsx=fs.readdirSync(path.join(root,d)).filter(f=>f.endsWith('.js')&&f!=='subject.js'&&f!=='quiz.js').sort();
  files.push(`${d}/subject.js`,...fsx.map(f=>`${d}/${f}`));
  if(fs.existsSync(path.join(root,d,'quiz.js')))files.push(`${d}/quiz.js`);
}
const v=Date.now().toString(36);
fs.writeFileSync(path.join(root,'content.js'),'window.CONTENT='+JSON.stringify(files.map(f=>f+'?v='+v),null,0)+';\n');
console.log(files.length+' files');
