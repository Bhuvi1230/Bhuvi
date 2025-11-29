const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
  });
}

// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    event.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth'
    });

    // close mobile nav after click
    navMenu.classList.remove('show');
    menuBtn.classList.remove('open');
  });
});

