class Register {
  constructor() {
    this._array = [];
  }
  set array(array) {
    array = this._array;
  }
  get array() {
    return this._array;
  }
  menu() {
    let option = parseInt(prompt(`Welcome to BurguerTown
  1. Enter Product
  2. Search for product by name
  3. Find product by code
  0. Exit Program`));
    return option;
  }
  ingresum() {
    let code = parseInt(prompt('What is your new product code?'));
    let name = prompt('What is the name of your new product');
    let price = parseInt(prompt('What is the price of your new product'));

    let data = {
      name,
      code,
      price
    };

    if (!localStorage.data) {
      this._array = data;
      localStorage.setItem('data', JSON.stringify(this._array));

    } else {
      this._array = [];
      this._array.push(JSON.parse(localStorage.getItem('data')));
      this._array.push(data);
      localStorage.setItem('data', JSON.stringify(this._array));
    }

    this.validate();
  }
  name() {
    let find = prompt('Which product do you want to search?');
    this._array = JSON.parse(localStorage.getItem('data'));
    let cont = 0;
    for (let array in this._array) {
      if (find === this._array[array].name) {
        cont++;
      }
    }
    console.log(cont === 0 ? 'Product is not registered' : `Product is already registered, ${cont} times`);
    this.validate();
  }
  code() {
    let find = parseInt(prompt('Enter the product code to search'));
    this._array = JSON.parse(localStorage.getItem('data'));
    let cont = 0;
    for (let array in this._array) {
      if (find === this._array[array].code) {
        cont++;
      }
    }
    console.log(cont === 0 ? 'Product is not registered' : `Product is already registered, ${cont} times`);
    this.validate();
  }
  validate() {
    let option = this.menu();
    switch (option) {
      case 1:
        this.ingresum();
        break;
      case 2:
        this.name();
        break;
      case 3:
        this.code();
        break;
      case 0:
        alert('Bye');
        break;
      default:
        this.validate();
        break;
    }
  }
}
let products = new Register();
products.validate();