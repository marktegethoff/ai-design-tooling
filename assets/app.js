/* ============================================================
   EPS.xd OS — app.js
   ============================================================ */

const navMap = {
  'page-home': 'nav-home',
  'page-case-study': 'nav-case-study',
  'page-setup': 'nav-setup',
  'page-reference': 'nav-reference',
  'page-behavioral-contract': 'nav-system',
  'page-agents': 'nav-system',
  'page-skills': 'nav-system',
  'page-memory': 'nav-system',
  'page-governance': 'nav-pillars',
  'page-vocabulary': 'nav-pillars',
  'page-onboarding': 'nav-pillars',
  'page-ceremony': 'nav-pillars',
  'page-proof': 'nav-pillars',
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  if (!isOpen) dd.classList.add('open');
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

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});
