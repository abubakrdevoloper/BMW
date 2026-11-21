document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.auth-modal');
  const openers = document.querySelectorAll('.open-auth');
  const close = document.querySelector('.modal-close');
  const backdrop = document.querySelector('.modal-backdrop');
  const tabs = document.querySelectorAll('.auth-tab');
  const nameField = document.querySelector('.name-field');
  const submit = document.querySelector('.submit-auth');
  const form = document.querySelector('.auth-form');
  const message = document.querySelector('.form-message');
  function showModal(){ if(!modal)return; modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-active'); }
  function hideModal(){ if(!modal)return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-active'); }
  openers.forEach(btn => btn.addEventListener('click', showModal));
  [close, backdrop].forEach(el => el && el.addEventListener('click', hideModal));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') hideModal(); });
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.toggle('selected', t === tab));
    const register = tab.dataset.tab === 'register';
    if(nameField) nameField.hidden = !register;
    if(submit) submit.innerHTML = register ? 'Hisob yaratish <b>→</b>' : 'Kirish <b>→</b>';
    if(message) message.textContent = '';
  }));
  if(form) form.addEventListener('submit', e => {
    e.preventDefault();
    const mode = document.querySelector('.auth-tab.selected')?.dataset.tab;
    if(message) message.textContent = mode === 'login' ? 'Demo rejim: kirish formasi tekshirildi.' : 'Tabriklaymiz! Demo hisob formasi to‘ldirildi.';
    form.reset();
  });
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(menu && nav) menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('nav-open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  }));
});