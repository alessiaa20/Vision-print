const cards = document.querySelectorAll('.feature-card, .price-card, .stat-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(139,92,246,0.25),
        rgba(255,255,255,0.06)
      )`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = 'rgba(255,255,255,0.08)';
  });
});

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50) {
    navbar.style.background = 'rgba(7,4,18,0.92)';
  }
  else {
    navbar.style.background = 'rgba(7,4,18,0.7)';
  }

});