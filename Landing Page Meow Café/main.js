// Menu Hamburguer
const menuIcon = document.querySelector('.navbar-menu-icon');
const menuMobile = document.querySelector('.navbar-menu-mobile');

menuIcon.addEventListener('click', () => {
  menuMobile.classList.toggle('active'); // Alternar a classe 'active' dos links
  menuIcon.classList.toggle('active'); // Alternar a classe 'active' do ícone do menu]
});
