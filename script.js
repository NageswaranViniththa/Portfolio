// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {threshold: 0.12});

// Observe all elements with 'reveal' class
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
