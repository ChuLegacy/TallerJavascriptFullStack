function menu() {
  let option = parseInt(prompt(`1. Llenar arreglo
2. Buscar elemento por método de búsqueda secuencial
3. Aplicar método de ordenamiento de burbuja
4. Aplicar método de ordenamiento de burbuja bidireccional
5. Aplicar método de ordenamiento por inserción
6. Aplicar método de ordenamiento por mezcla
7. Aplicar el método de ordenamiento por selección
8. Imprimir arreglo.
0. Salir del programa`));
  return option;
}
let arrangement = [];
var size;
function fillArrangement() {
  size = parseInt(prompt('Write the size of the arrangement'));
  for (let i = 0; i < size; i++) {
    arrangement[i] = Math.round(Math.random() * 100);
  }
  validate();
}


function search() {
  let info = '';
  let bad = '';
  if (arrangement.length !== 0) {
    let find = parseInt(prompt('Type the item you want to find?'));
    let cont = 0;
    for (let array of arrangement) {
      if (array === find) {
        cont++;
        info = `El elemento ha sido encontrado: ${cont} veces`;
      } else {
        bad = 'El elemento no ha sido encontrado dentro del array';
      }
    }
    console.log(cont === 0 ? bad : info);
    validate();
  } else {
    alert('EL arreglo esta vacio');
    validate();
  }
}


function bubbleSorting() {
  let ant;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < arrangement.length - 1; i++) {
      if (arrangement[i] >= arrangement[i + 1]) {
        ant = arrangement[i];
        arrangement[i] = arrangement[i + 1];
        arrangement[i + 1] = ant;
      }
    }
  }
  console.log(arrangement);
}
function bubbleSortingBidirectional() {
  let rig;
  for (j = 0; j < size; j++) {
    for (i = 0; i < arrangement.length; i++) {
      if (arrangement[i] >= arrangement[i + 1]) {
        rig = arrangement[i];
        arrangement[i] = arrangement[i + 1];
        arrangement[i + 1] = rig;
      }
    }
    let left;
    for (i = arrangement.length - 1; i > 0; i--) {
      if (arrangement[i] < arrangement[i - 1]) {
        left = arrangement[i];
        arrangement[i] = arrangement[i - 1];
        arrangement[i - 1] = left;
      }
    }
  }
  console.log(arrangement);
}
//function insertion() {
//  for (array of arrangement) {
//    for (i = 0; i < arrangement)
//  }
//}

function print() {
  console.log(arrangement);
  validate();
}

function validate() {
  let option = menu();
  switch (option) {
    case 1:
      fillArrangement();
      break;
    case 2:
      search();
      break;
    case 3:
      bubbleSorting();
      break;
    case 4:
      bubbleSortingBidirectional();
      break;
    case 8:
      print();
      break;
    case 0:
      alert('Bay Bay :) ');
      break;
    default:
      validate();
      break;
  }
}
validate();