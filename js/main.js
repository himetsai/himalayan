/* Himalayan Society — main.js */

// ── Mobile nav toggle ──────────────────────────────────────
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (navbar && !navbar.contains(e.target)) navLinks.classList.remove('open');
  });
}

// ── Hero parallax ──────────────────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
  }, { passive: true });
}

// ── Events page: filter tabs ───────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      eventCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'flex' : 'none';
      });
    });
  });
}

// ── Contact form ───────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thank you for your message. We\'ll be in touch soon!';
    contactForm.reset();
  });
}
