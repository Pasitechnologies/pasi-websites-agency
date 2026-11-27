const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');
const mobileQuery = window.matchMedia('(max-width: 820px)');

const setMenuOpen = (open) => {
  if (!menuButton || !menu) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menu.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open && mobileQuery.matches);
};

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

mobileQuery.addEventListener?.('change', (event) => {
  if (!event.matches) setMenuOpen(false);
});
