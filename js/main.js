const header = document.querySelector('.site-header');
const backToTop = document.querySelector('.back-to-top');
const revealItems = document.querySelectorAll('.reveal');

// Reveal elements only when motion is allowed; otherwise keep all content visible.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const onScroll = () => {
  const scrolled = window.scrollY > 24;
  header?.classList.toggle('scrolled', scrolled);
  backToTop?.classList.toggle('visible', window.scrollY > 500);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
});

// Keep the navigation indicator in sync with the section currently in view.
const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

const dialog = document.querySelector('#project-dialog');
const projectData = {
  resort: {
    title: 'Luxury resort website',
    description: 'A demonstration hospitality concept: a warm, image-led digital welcome with a clear path to explore accommodation and make an enquiry. This is a concept, not a completed client project.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85',
    alt: 'Tropical resort pool and palm trees'
  },
  estate: {
    title: 'Real estate website',
    description: 'A demonstration property concept focused on spacious imagery, easy discovery and a calm, considered browsing experience. This is a concept, not a completed client project.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    alt: 'Contemporary living room'
  },
  corporate: {
    title: 'Corporate business website',
    description: 'A demonstration business concept designed to communicate credibility, purpose and services with clarity. This is a concept, not a completed client project.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    alt: 'Bright contemporary office interior'
  }
};

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.project];
    if (!project || !dialog) return;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    const image = document.querySelector('#dialog-image');
    image.src = project.image;
    image.alt = project.alt;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
});

document.querySelector('.dialog-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog?.querySelector('#dialog-contact')?.addEventListener('click', () => dialog.close());
