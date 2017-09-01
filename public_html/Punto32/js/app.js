class Menu {
  constructor() {
    do {
      this.option = parseInt(prompt(`1. Make a sum
2. Perform a subtraction
3. Perform a multiplication
4. Make a division
0. Quit the program`));
    } while (this.option > 4);
    return this.option;
  }
}
class Operations extends Menu {
  constructor() {
    super();
    this._sum;
    this._subtraction;
    this._multiplication;
    this._division;
  }
  set sum(numbers) {
    this._sum = numbers[0] + numbers[1];
  }
  get sum() {
    return this._sum;
  }
  set subtraction(numbers) {
    this._subtraction = numbers[0] - numbers[1];
  }
  get subtraction() {
    return this._subtration;
  }
  set multiplication(numbers) {
    this._multiplication = numbers[0] * numbers[1];
  }
  get multiplication() {
    return this._multiplication;
  }
  set division(numbers) {
    this._division = numbers[0] / numbers[1];
  }
  get division() {
    return this._division;
  }
  quit() {
    alert('Bay');
  }
}
let opera = new Operations();
switch (opera.option) {
  case 1:
    var num1 = parseInt(prompt('Write one number')),
            num2 = parseInt(prompt('Write one number'));
    var numbers = [num1, num2];
    opera.sum = numbers;
    console.log(opera.sum);
    break;
  case 2:
    var num1 = parseInt(prompt('Write one number')),
            num2 = parseInt(prompt('Write one number'));
    var numbers = [num1, num2];
    opera.subtraction = numbers;
    console.log(opera.subtraction);
    break;
  case 3:
    var num1 = parseInt(prompt('Write one number')),
            num2 = parseInt(prompt('Write one number'));
    var numbers = [num1, num2];
    opera.multiplication = numbers;
    console.log(opera.multiplication);
    break;
  case 4:
    num1 = parseInt(prompt('Write one number')),
            num2 = parseInt(prompt('Write one number'));
    numbers = [num1, num2];
    opera.division = numbers;
    console.log(opera.division);
    break;
  case 0:
    opera.quit();
    break;
  default:
    alert('Select a correct option');
    break;
}