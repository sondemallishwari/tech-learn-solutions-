
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));


const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
  ctaButton.classList.add('pulse');
});
ctaButton.addEventListener('mouseleave', () => {
  ctaButton.classList.remove('pulse');
});
