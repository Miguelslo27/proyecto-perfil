/*
DOM Document Object Model
document.getElementById Me devuelve una referencia del elemento HTML en el DOM
*/
var menu_button = document.getElementById('menu-button');

if (menu_button) {
  menu_button.addEventListener('click', toggleMenu);
}

var hire_me_button = document.getElementById('hire-me-button');

if (hire_me_button) {
  hire_me_button.addEventListener('click', function() {
    alert('Contratame porque soy el mejor');
  });
}

var mobile_menu = document.getElementById('mobile-menu');

if (mobile_menu) {
  mobile_menu.addEventListener('transitionstart', showMenu);
  mobile_menu.addEventListener('transitionend', hideMenu);
}

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

// /////////////////////////////////////////////////////////////////////

// Implementacion de la clase Calculator
if (typeof Calculator !== 'undefined') {
  var calc = new Calculator();
  var calc_input = document.getElementById('calc_input');
  var calc_sum = document.getElementById('calc_sum');
  var calc_subs = document.getElementById('calc_subs');
  var calc_div = document.getElementById('calc_div');
  var calc_mult = document.getElementById('calc_mult');
  var calc_eq = document.getElementById('calc_eq');

  calc.setInput(calc_input);
  if (calc_input) {
    calc_input.addEventListener('focus', function () {
      this.select();
    });
  }
  if (calc_sum) {
    calc_sum.addEventListener('click', calc.setOperation.bind(calc, 'sum'));
  }
  if (calc_subs) {
    calc_subs.addEventListener('click', calc.setOperation.bind(calc, 'subs'));
  }
  if (calc_div) {
    calc_div.addEventListener('click', calc.setOperation.bind(calc, 'div'));
  }
  if (calc_mult) {
    calc_mult.addEventListener('click', calc.setOperation.bind(calc, 'mult'));
  }
  if (calc_eq) {
    calc_eq.addEventListener('click', calc.setOperation.bind(calc, 'equal'));
  }
}

var requestUrl = 'http://localhost:8080/api/datos';

var reqObj = new XMLHttpRequest();
reqObj.open('get', requestUrl);
reqObj.send();
reqObj.addEventListener('readystatechange', function () {
  console.log(reqObj);
  var state = reqObj.readyState;
  var status = reqObj.status;
  var response = reqObj.response;

  if (state == 4) {
    if (status == 200) {
      console.log(response);
    }
  }
})

/* 
Arrow Function

function (response) {
  return response.json()
}

===>

response => respuesta.json();

 */

var misDatos = fetch(requestUrl); // promise
  // .then(response => response.json())
  // .then(console.log);

  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...

misDatos
  .then(response => response.json())
  .then(console.log);

console.log('Mi promesa volvio o no?');

// String Literals

var apiHost = 'http://localhost:8080/api/';
var dataPath = 'data'

console.log(apiHost + datPath);
console.log(`${apiHost}${dataPath}`);

var mensaje = 'Lorem ipsum dolor sit amet ' + nombre + ' adipisicing elit. Repellat impedit ' + direccion + 'eveniet';
    mensaje += 'incidunt ' + telefono + ' nesciunt libero eos, nemo ullam porro at atque consectetur nulla pariatur deserunt accusamus.'

var mensaje = `Lorem ipsum dolor sit amet ${nombre} adipisicing elit. Repellat impedit ${direccion} eveniet
              incidunt ${telefono} nesciunt libero eos, nemo ullam porro at
              atque consectetur nulla pariatur deserunt
              accusamus.`;
