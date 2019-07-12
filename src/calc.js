// Definicion de la clase Calculator
function Calculator () {
  this.input;
  this.value_1;
  this.value_2;
  this.operator;
  this.result = 0;
}

Calculator.prototype.sum = function () {
  this.result = this.value_1 + this.value_2;
}
Calculator.prototype.substract = function () {
  this.result = this.value_1 - this.value_2;
}
Calculator.prototype.divide = function () {
  this.result = this.value_1 / this.value_2;
}
Calculator.prototype.multiply = function () {
  this.result = this.value_1 * this.value_2;
}
Calculator.prototype.setInput = function(input) {
  this.input = input;
}
Calculator.prototype.setValue1 = function (value) {
  if (value) {
    this.value_1 = parseInt(value);
  } else {
    this.value_1 = undefined;
  }
}
Calculator.prototype.setValue2 = function (value) {
  if (value) {
    this.value_2 = parseInt(value);
  } else {
    this.value_2 = undefined;
  }
}
Calculator.prototype.setOperator = function (operator) {
  if (operator != 'equal') {
    this.operator = operator;
  }
}
Calculator.prototype.calcResult = function () {
  if (!isNaN(this.value_1) && !isNaN(this.value_2)) {
    switch(this.operator) {
      case 'sum': {
        this.sum();
        break;
      }
      case 'subs': {
        this.substract();
        break;
      }
      case 'div': {
        this.divide();
        break;
      }
      case 'mult': {
        this.multiply();
        break;
      }
      default: {
        this.result = this.value_1;
      }
    }

    this.setValue1();
    this.setValue2();
    this.input.value = this.result;
  } else {
    alert('Falta un numero para operar');
  }
}
Calculator.prototype.setOperation = function (operator) {
  calc.setOperator(operator);

  if (isNaN(calc.value_1)) {
    calc.setValue1(this.input.value);
  } else {
    calc.setValue2(this.input.value);
    calc.calcResult();
  }

  this.input.focus();
}
