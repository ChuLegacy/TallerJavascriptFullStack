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
  validate();
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
  validate();
}
function insertion() {
  for (i = 0; i < arrangement.length; i++) {
    for (j = 0; j <= arrangement[j]; j++) {
      var ant = 0;
      if (arrangement[i] < arrangement[j]) {
        ant = arrangement[i];
        arrangement[i] = arrangement[j];
        arrangement[j] = ant;
      }
    }
  }
  console.log(arrangement);
  validate();
}
function mixture() {
//  for (j = 0; j < arrangement.length - 1; j++) {
//
//  }
  let a = arrangement.slice(0, 4);
  let c = a.slice(0, 2);
  let d = a.slice(2);
  if (c[1] < c[0]) {
    ant = 0;
    ant = c[1];
    c[1] = c[0];
    c[0] = ant;
  }
  if (d[1] < d[0]) {
    ant = 0;
    ant = d[1];
    d[1] = d[0];
    d[0] = ant;
  }
  if (c[0] > d[0]) {
    ant = 0;
    ant = c[0];
    c[0] = d[0];
    d[0] = ant;
  } else if ((c[0] > d[0]) && (c[0] > d[1])) {
    ant = 0;
    ant = c[0];
    c[0] = d[1];
    d[1] = ant;

    d[1] = c[0];

  }
  a = c.concat(d);
  let b = arrangement.slice(4);
  let e = b.slice(0, 2);
  let f = b.slice(2);
  if (e[1] < e[0]) {
    ant = 0;
    ant = e[1];
    e[1] = e[0];
    e[0] = ant;
  }
  if (f[1] < f[0]) {
    ant = 0;
    ant = f[1];
    f[1] = f[0];
    f[0] = ant;
  }
  b = e.concat(f);
  arrangement = a.concat(b);
  console.log(b);
  validate();

}

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
    case 5:
      insertion();
      break;
    case 6:
      mixture();
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