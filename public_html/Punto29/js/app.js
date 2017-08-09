
function menu() {
  let option = parseInt(prompt(`Welcome to BurguerTown

  1. Enter Product
  2. Search for product by name
  3. Find product by code
  0. Exit Program`));
  return option;
}


var arrangement = [];

function ingresum() {
  let code = parseInt(prompt('What is your new product code?'));
  let name = prompt('What is the name of your new product');

  let data = {
    name,
    code
  };
  if (localStorage.length === 0) {
//    arrangement = [
//      data = {
//        name,
//        code
//      }
//    ];
    arrangement.push(data);

  } else {
    arrangement.push(data);
  }
  console.log(typeof (arrangement));
  localStorage.setItem('data', JSON.stringify(arrangement));

  validate();
}

function name() {
  let find = prompt('Which product do you want to search?');
  arrangement = JSON.parse(localStorage.getItem('data'));
  let cont = 0;
  for (let array in arrangement) {
    if (find === arrangement[array].name) {
      cont++;
    }
  }
  console.log(cont === 0 ? 'Product is not registered' : `Product is already registered, ${cont} times`);
  validate();
}
function code() {
  let find = parseInt(prompt('Enter the product code to search'));
  arrangement = JSON.parse(localStorage.getItem('data'));
  let cont = 0;
  for (let array in arrangement) {
    if (find === arrangement[array].code) {
      cont++;
    }
  }
  console.log(cont === 0 ? 'Product is not registered' : `Product is already registered, ${cont} times`);
  validate();
}
function validate() {
  let option = menu();
  switch (option) {
    case 1:
      ingresum();
      break;
    case 2:
      name();
      break;
    case 3:
      code();
      break;
    case 0:
      alert('Bye');
      break;
    default:
      validate();
      break;
  }
}
validate();