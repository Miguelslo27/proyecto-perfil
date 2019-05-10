/*
DOM Document Object Model
document.getElementById Me devuelve una referencia del elemento HTML en el DOM
*/
var menu_button = document.getElementById('menu-button');
    menu_button.addEventListener('click', toggleMenu);
    
var hire_me_button = document.getElementById('hire-me-button');
    hire_me_button.addEventListener('click', function() {
      alert('Contratame porque soy el mejor');
    });

var mobile_menu = document.getElementById('mobile-menu');
    mobile_menu.addEventListener('transitionstart', showMenu);
    mobile_menu.addEventListener('transitionend', hideMenu);

function toggleMenu() {
  mobile_menu.classList.remove('d-none');
  
  if (mobile_menu.classList.contains('menu-hidden')) {
    mobile_menu.classList.add('menu-visible');
    mobile_menu.classList.remove('menu-hidden');
  } else {
    mobile_menu.classList.add('menu-hidden');
    mobile_menu.classList.remove('menu-visible');
  }
}

function showMenu() {
  if (mobile_menu.classList.contains('menu-visible')) {
    mobile_menu.classList.remove('d-none');
  }
}

function hideMenu() {
  if (mobile_menu.classList.contains('menu-hidden')) {
    mobile_menu.classList.add('d-none');
  }
}
