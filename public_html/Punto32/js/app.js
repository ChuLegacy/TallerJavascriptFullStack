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
    this.menu;
  }
  sum() {
    if (this.option === 1) {
      let num1 = parseInt(prompt('Write one number'));
      let num2 = parseInt(prompt('Write one number'));
      console.log(num1 + num2);
    }
  }
  subtraction() {
    if (this.option === 2) {
      let num1 = parseInt(prompt('Write one number'));
      let num2 = parseInt(prompt('Write one number'));
      console.log(num1 - num2);
    }
  }
  multiplication() {
    if (this.option === 3) {
      let num1 = parseInt(prompt('Write one number'));
      let num2 = parseInt(prompt('Write one number'));
      console.log(num1 * num2);
    }
  }
  division() {
    if (this.option === 4) {
      let num1 = parseInt(prompt('Write one number'));
      let num2 = parseInt(prompt('Write one number'));
      console.log(num1 / num2);
    }
  }
  quit() {
    if (this.option === 4) {
      alert('Bay');
    }
  }
}
let opera = new Operations();
opera.sum();
opera.subtraction();
opera.multiplication();
opera.division();
opera.quit();