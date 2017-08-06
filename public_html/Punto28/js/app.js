function menu() {
  let option = parseInt(prompt(`1. Fill arrangement
2. Find element by sequential search method
3. Apply bubble sorting method
4. Apply the method of ordering the bidirectional bubble
5. Apply the insertion sort method
6. Apply the ordering method by the mixture
7. Apply the ordering method by selection
8. Print.
0. Quit the program`));
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
        info = `Item has been found: ${cont} times`;
      } else {
        bad = 'The element has not been found inside the array';
      }
    }
    console.log(cont === 0 ? bad : info);
    validate();
  } else {
    alert('The arrangement is empty');
    validate();
  }
}


function bubbleSorting() {
  if (arrangement.length !== 0) {
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
  } else {
    alert('The arrangement is empty');
    validate();
  }
}
function bubbleSortingBidirectional() {
  if (arrangement !== 0) {
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
  } else {
    alert('The arrangement is empty');
    validate();
  }
}
function insertion() {
  if (arrangement.length !== 0) {
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
  } else {
    alert('The arrangement is empty');
    validate();
  }
}
function mixture() {
  if (arrangement.length !== 0) {
    let mergeSort = array => {
      if (array.length < 2) {
        return array;
      }
      let middle = parseInt(array.length / 2) | 0;
      let left = array.slice(0, middle);
      let right = array.slice(middle);
      let merge = (left, right) => {
        let result = [];
        let il = ir = 0;
        while (il < left.length && ir < right.length) {
          result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
        }
        return [...result, ...left.slice(il), ...right.slice(ir)];
      };
      return merge(mergeSort(left), mergeSort(right));
    };
    let result = mergeSort(arrangement);
    arrangement = result;
    validate();
  } else {
    alert('The arrangement is empty');
    validate();
  }

}
function selection() {
  if (arrangement.length !== 0) {
    let selectionSort = arr => {
      for (let j = 0; j < arr.length; ++j) {
        let i = iMin = j;
        for (++i; i < arr.length; ++i) {
          (arr[ i ] < arr[ iMin ]) && (iMin = i);
        }
        [arr[ j ], arr[ iMin ]] = [arr[ iMin ], arr[ j ]];
      }

      return arr;
    };
    let result = selectionSort(arrangement);
    arrangement = result;
    validate();
  } else {
    alert('The arrangement is empty');
    validate();
  }
}
function print() {
  if (arrangement.length !== 0) {
    let info = '';
    for (let array of arrangement) {
      info += array + " | ";
    }
    console.log(info);
    validate();
  } else {
    alert('The arrangement is empty');
    validate();
  }
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
    case 7:
      selection();
      break;
    case 8:
      print();
      break;
    case 0:
      alert('Bay!');
      break;
    default:
      validate();
      break;
  }
}
validate();