class Order {
  constructor() {
    this._array = [];

  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  menu() {
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
  validate() {
    let option = this.menu();
    switch (option) {
      case 1:
        this.fillArrangement();
        break;
      case 2:
        this.search();
        break;
      case 3:
        this.bubbleSorting();
        break;
      case 4:
        this.bubbleSortingBidirectional();
        break;
      case 5:
        this.insertion();
        break;
      case 6:
        this.mixture();
        break;
      case 7:
        this.selection();
        break;
      case 8:
        this.print();
        break;
      case 0:
        alert('Bay!');
        break;
      default:
        this.validate();
        break;
    }
  }
  fillArrangement() {
    this.size = parseInt(prompt('Write the size of the arrangement'));
    for (let i = 0; i < this.size; i++) {
      this._array[i] = Math.round(Math.random() * 100);
    }
    this.validate();
  }
  search() {
    let info = '';
    let bad = '';
    if (this._array.length !== 0) {
      let find = parseInt(prompt('Type the item you want to find?'));
      let cont = 0;
      for (let array of this._array) {
        if (array === find) {
          cont++;
          info = `Item has been found: ${cont} times`;
        } else {
          bad = 'The element has not been found inside the array';
        }
      }
      console.log(cont === 0 ? bad : info);
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  bubbleSorting() {
    if (this._array.length !== 0) {
      let ant;
      for (let j = 0; j < this.size; j++) {
        for (let i = 0; i < this._array.length - 1; i++) {
          if (this._array[i] >= this._array[i + 1]) {
            ant = this._array[i];
            this._array[i] = this._array[i + 1];
            this._array[i + 1] = ant;
          }
        }
      }
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  bubbleSortingBidirectional() {
    if (this._array !== 0) {
      let rig;
      for (let j = 0; j < this.size; j++) {
        for (let i = 0; i < this._array.length; i++) {
          if (this._array[i] >= this._array[i + 1]) {
            rig = this._array[i];
            this._array[i] = this._array[i + 1];
            this._array[i + 1] = rig;
          }
        }
        let left;
        for (let i = this._array.length - 1; i > 0; i--) {
          if (this._array[i] < this._array[i - 1]) {
            left = this._array[i];
            this._array[i] = this._array[i - 1];
            this._array[i - 1] = left;
          }
        }
      }
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  insertion() {
    if (this._array.length !== 0) {
      for (let i = 0; i < this._array.length; i++) {
        for (let j = 0; j <= this._array[j]; j++) {
          var ant = 0;
          if (this._array[i] < this._array[j]) {
            ant = this._array[i];
            this._array[i] = this._array[j];
            this._array[j] = ant;
          }
        }
      }
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  mixture() {
    if (this._array.length !== 0) {
      let mergeSort = array => {
        if (array.length < 2) {
          return array;
        }
        let middle = parseInt(array.length / 2) | 0;
        let left = array.slice(0, middle);
        let right = array.slice(middle);
        let merge = (left, right) => {
          let result = [];
          let ir = 0;
          let il = ir;
          while (il < left.length && ir < right.length) {
            result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
          }
          return [...result, ...left.slice(il), ...right.slice(ir)];
        };
        return merge(mergeSort(left), mergeSort(right));
      };
      let result = mergeSort(this._array);
      this._array = result;
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  selection() {
    if (this._array.length !== 0) {
      let selectionSort = arr => {
        for (let j = 0; j < arr.length; ++j) {
          let iMin = j;
          let i = iMin;
          for (++i; i < arr.length; ++i) {
            (arr[i] < arr[iMin]) && (iMin = i);
          }
          [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
        }
        return arr;
      };
      let result = selectionSort(this._array);
      this._array = result;
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  print() {
    if (this._array.length !== 0) {
      let info = '';
      for (let array of this._array) {
        info += array + " | ";
      }
      console.log(info);
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
}
let ordered = new Order();
ordered.validate();