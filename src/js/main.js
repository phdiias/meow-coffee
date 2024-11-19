// Menu Hamburguer
const menuLines = document.querySelectorAll('.menu-line');
const menuIcon = document.querySelector('.navbar-menu-icon');
const menuMobile = document.querySelector('.navbar-menu-mobile');

menuIcon.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
  menuMobile.classList.toggle('active');
  menuIcon.classList.toggle('active');
  menuLines.forEach((line) => {
    line.classList.toggle('active');
  });
});
