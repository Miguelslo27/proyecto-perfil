var menu_button = document.getElementById('menu-button');
    menu_button.addEventListener('click', toggleMenu);

var mobile_menu = document.getElementById('mobile-menu');

function toggleMenu() {
  if (mobile_menu.classList.contains('menu-hidden')) {
    mobile_menu.classList.remove('menu-hidden');
    mobile_menu.classList.add('menu-visible');
  } else {
    mobile_menu.classList.remove('menu-visible');
    mobile_menu.classList.add('menu-hidden');
  }
}