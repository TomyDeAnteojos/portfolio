const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const header = document.querySelector('header');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 10);
};

updateHeader();
window.addEventListener('scroll', updateHeader);

// Animaciones de aparicion al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

faders.forEach((el) => observer.observe(el));
