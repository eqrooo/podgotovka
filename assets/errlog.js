/* Отправка JS-ошибок сайта в Supabase (таблица errors, только вставка). */
(function(){
  var cfg=window.SITE_CONFIG||{},sent={},n=0;
  if(!cfg.supabaseUrl||!cfg.supabaseKey||/^(localhost|127\.0\.0\.1)$/.test(location.hostname))return;
  function cut(s,k){s=String(s==null?'':s);return s.length>k?s.slice(0,k):s}
  function send(msg,stack){
    msg=cut(msg||'Unknown error',500);
    if(n>=5||sent[msg])return;sent[msg]=1;n++;
    try{fetch(cfg.supabaseUrl+'/rest/v1/errors',{method:'POST',keepalive:true,
      headers:{'apikey':cfg.supabaseKey,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({page:cut(location.pathname+location.hash,300),message:msg,stack:cut(stack,2000),ua:cut(navigator.userAgent,300)})
    }).catch(function(){})}catch(_){}
  }
  window.addEventListener('error',function(e){
    // ресурсы (картинки/скрипты не загрузились)
    if(e.target&&e.target!==window&&(e.target.src||e.target.href)){
      var u=e.target.src||e.target.href;
      if(String(u).indexOf(location.origin)===0)send('Не загрузился файл: '+u,'');
      return;
    }
    if(!e.filename||e.filename.indexOf(location.origin)!==0)return; // чужие скрипты и расширения
    send(e.message,(e.error&&e.error.stack)||(e.filename+':'+e.lineno+':'+e.colno));
  },true);
  window.addEventListener('unhandledrejection',function(e){
    var r=e.reason;send('Promise: '+(r&&r.message||r),r&&r.stack);
  });
  window.reportError2=send;
})();
