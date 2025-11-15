// basic interactive behaviors for demo package
document.addEventListener('click', function(e){
  if(e.target && e.target.id==='cartBtn'){ e.preventDefault(); document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartDrawer').setAttribute('aria-hidden','false'); }
  if(e.target && e.target.id==='closeCart'){ e.preventDefault(); document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartDrawer').setAttribute('aria-hidden','true'); }
  if(e.target && e.target.id==='loginBtn'){ e.preventDefault(); const m=document.getElementById('loginModal'); m.setAttribute('aria-hidden','false'); }
  if(e.target && e.target.id==='closeLogin'){ e.preventDefault(); const m=document.getElementById('loginModal'); m.setAttribute('aria-hidden','true'); }
});

// simple tab logic on account page
document.addEventListener('DOMContentLoaded', function(){
  var topLogin=document.getElementById('loginBtnTop'); if(topLogin){ topLogin.addEventListener('click', function(){ document.getElementById('loginModal').setAttribute('aria-hidden','false'); }); }

  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click', function(){
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    this.classList.add('active');
    const tab=this.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');
    const el=document.getElementById(tab);
    if(el) el.style.display='block';
  }));

  const loginForm=document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      // demo behaviour: set local "logged" flag and redirect to account page
      localStorage.setItem('buiten_logged','1');
      window.location.href='account.html';
    });
  }
});
