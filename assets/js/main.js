// Minimal interactive behavior:
// - mobile menu toggle
// - smooth scroll
// - language switch
// - set footer year
document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('main-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var is = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', is ? 'true' : 'false');
    });
  }

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); if(menu.classList.contains('show')) menu.classList.remove('show'); }
    });
  });

  // Language switch
  var langButtons = document.querySelectorAll('.lang-switch [data-lang]');
  function setLang(lang){
    document.body.classList.remove('lang-es','lang-en');
    document.body.classList.add('lang-'+lang);
    document.querySelectorAll('[data-lang]').forEach(function(el){
      if(el.getAttribute('data-lang') === lang) el.classList.remove('hidden');
      else el.classList.add('hidden');
    });
    langButtons.forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang')===lang) });
  }
  langButtons.forEach(function(btn){ btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-lang')) }) });
  // default already set in HTML to es
  setLang('es');

  // footer year
  var y = new Date().getFullYear();
  var yel = document.getElementById('year');
  if(yel) yel.textContent = y;

  // contact form simple UX
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // form action is mailto by default; show a friendly message and let browser handle mailto
      alert('Gracias — el formulario intenta abrir tu cliente de correo. Para integrar un formulario real te puedo orientar con Formspree o un backend.');
    });
  }
});
