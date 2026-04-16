/* ============================================================
   Design AI Operating System — app.js
   ============================================================ */

const navMap = {
  'page-home': 'nav-home',
  'page-start-here': 'nav-start-here',
  'page-rolling-out': 'nav-rolling-out',
  'page-case-study': 'nav-case-study',
  'page-behavioral-contract': 'nav-system',
  'page-agents-skills': 'nav-system',
  'page-memory': 'nav-system',
  'page-setup': 'nav-system',
  'page-reference': 'nav-reference',
};

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  const navId = navMap[id];
  if (navId) {
    const navLink = document.getElementById(navId);
    if (navLink) navLink.classList.add('active');
  }

  // Close all dropdowns
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));

  window.scrollTo({ top: 0 });
}

function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  if (!isOpen) dd.classList.add('open');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('nav-hamburger');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
  btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  btn.querySelector('.material-symbols-outlined').textContent = isOpen ? 'menu' : 'close';
}

function showPageMobile(id) {
  showPage(id);
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('nav-hamburger');
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
  btn.setAttribute('aria-expanded', 'false');
  btn.querySelector('.material-symbols-outlined').textContent = 'menu';
}

function handleCardKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    e.currentTarget.click();
  }
}

function copyCode(btn) {
  const block = btn.closest('.copyable-block');
  const code = block.querySelector('code');
  if (!code) return;
  navigator.clipboard.writeText(code.innerText).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 1800);
  });
}

// Close dropdowns and mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
  if (!e.target.closest('.sds-topnav') && !e.target.closest('.mobile-menu')) {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('nav-hamburger');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.material-symbols-outlined').textContent = 'menu';
    }
  }
});
