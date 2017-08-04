function menu() {
  let option = parseInt(prompt(`1. Make a sum
2. Perform a subtraction
3. Perform a multiplication
4. Make a division
0. Quit the program`));
  return option;
}

function sum() {
  let number1 = parseInt(prompt('Write one number'));
  let number2 = parseInt(prompt('Write one number'));
  alert(number1 + number2);
  validate();
}
function subtraction() {
  let number1 = parseInt(prompt('Write one number'));
  let number2 = parseInt(prompt('Write one number'));
  alert(number1 - number2);
  validate();
}
function multiplication() {
  let number1 = parseInt(prompt('Write one number'));
  let number2 = parseInt(prompt('Write one number'));
  alert(number1 * number2);
  validate();
}
function division() {
  let number1 = parseInt(prompt('Write one number'));
  let number2 = parseInt(prompt('Write one number'));
  alert(number1 / number2);
  validate();
}
function exit() {
  alert('Bay Bay ;)');
}

function validate() {
  let option = menu();
  switch (option) {
    case 1:
      sum();
      break;
    case 2:
      subtraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
    case 0:
      exit();
      break;
    default:
      validate();
      break;
  }
}
validate();