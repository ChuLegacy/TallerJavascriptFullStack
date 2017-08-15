class Register {
  constructor() {
    this.arrangement = [];
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
    let price = prompt('What is the price of your new product');

    let data = {
      name,
      code,
      price
    };
    if (localStorage.length === 0) {
      this.arrangement.push(data);

    } else {
      this.arrangement.push(data);
    }
    localStorage.setItem('data', JSON.stringify(this.arrangement));

    this.validate();
  }

  name() {
    let find = prompt('Which product do you want to search?');
    this.arrangement = JSON.parse(localStorage.getItem('data'));
    let cont = 0;
    for (let array in this.arrangement) {
      if (find === this.arrangement[array].name) {
        cont++;
      }
    }
    console.log(cont === 0 ? 'Product is not registered' : `Product is already registered, ${cont} times`);
    this.validate();
  }
  code() {
    let find = parseInt(prompt('Enter the product code to search'));
    this.arrangement = JSON.parse(localStorage.getItem('data'));
    let cont = 0;
    for (let array in this.arrangement) {
      if (find === this.arrangement[array].code) {
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