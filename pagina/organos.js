const name = "Miguel Ángel Figueroa Muñoz";
const nameElement = document.getElementById('animatedName');

name.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${index * 0.1}s`;
  nameElement.appendChild(span);
});

document.querySelector('.arrow').addEventListener('click', function() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-width');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
  bar.setAttribute('data-width', bar.style.width);
  bar.style.width = '0';
  observer.observe(bar);
});