// Собирает content.js — список файлов данных в порядке загрузки. Запуск: node tools/build-manifest.js
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const order=['hm','inf','pol','eco','econ'];
const dirs=fs.readdirSync(root).filter(d=>fs.existsSync(path.join(root,d,'subject.js')));
dirs.sort((a,b)=>(order.indexOf(a)+1||99)-(order.indexOf(b)+1||99));
const files=[],levels=[],levelsEn=[];
for(const d of dirs){
  const fsx=fs.readdirSync(path.join(root,d)).filter(f=>f.endsWith('.js')&&f!=='subject.js'&&f!=='quiz.js').sort();
  files.push(`${d}/subject.js`,...fsx.map(f=>`${d}/${f}`));
  if(fs.existsSync(path.join(root,d,'quiz.js')))files.push(`${d}/quiz.js`);
  // короткая версия и «простыми словами» грузятся по требованию — здесь только список, где они есть
  const lv=path.join(root,d,'lv');if(fs.existsSync(lv))levels.push(...fs.readdirSync(lv).filter(f=>f.endsWith('.js')).sort().map(f=>`${d}/${f.slice(0,-3)}`));
  const lve=path.join(lv,'en');if(fs.existsSync(lve))levelsEn.push(...fs.readdirSync(lve).filter(f=>f.endsWith('.js')).sort().map(f=>`${d}/${f.slice(0,-3)}`));
  const en=path.join(root,d,'en');if(fs.existsSync(en))files.push(...fs.readdirSync(en).filter(f=>f.endsWith('.js')).sort().map(f=>`${d}/en/${f}`));
}
const v=Date.now().toString(36);
fs.writeFileSync(path.join(root,'content.js'),'window.CONTENT='+JSON.stringify(files.map(f=>f+'?v='+v),null,0)+';\n'+
  'window.LEVELS='+JSON.stringify(levels)+';window.LEVELS_EN='+JSON.stringify(levelsEn)+';window.LEVELS_V='+JSON.stringify(v)+';\n');
// index.html подключает content.js с той же версией, чтобы браузеры не держали старый список
const ix=path.join(root,'index.html');
fs.writeFileSync(ix,fs.readFileSync(ix,'utf8').replace(/src="content\.js(\?v=[a-z0-9]+)?"/,`src="content.js?v=${v}"`));
console.log(files.length+' files, '+levels.length+' topics with extra note versions, '+levelsEn.length+' in English');
