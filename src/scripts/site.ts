/**
 * Small, calm enhancements (DESIGN.md §4, §10, §12). The site still works
 * if this file never loads.
 *  - Header shrinks from 72px to 60px after scrolling.
 *  - Floating WhatsApp button appears after 30% of the page is scrolled.
 *  - Sections below the fold fade up gently, once.
 *  - Mobile menu: lock page scroll while open; close after choosing a link.
 */
const header = document.querySelector<HTMLElement>('[data-header]');
const wa = document.querySelector<HTMLElement>('[data-wa-float]');

function onScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 8);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  wa?.classList.toggle('is-visible', max > 0 && y / max >= 0.3);
}
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });

// Fade-up on scroll (only for things not already on screen, so nothing flickers)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('reveal');
      io.observe(el);
    }
  });
}

// Mobile menu
const mobileNav = document.querySelector<HTMLDetailsElement>('[data-mobile-nav]');
mobileNav?.addEventListener('toggle', () => {
  document.documentElement.classList.toggle('menu-open', mobileNav.open);
});
mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileNav.removeAttribute('open')));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNav?.open) mobileNav.removeAttribute('open');
});
