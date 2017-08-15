class Order {
  constructor() {
    this.arrangement = [];
    this.size;

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

  fillArrangement() {
    this.size = parseInt(prompt('Write the size of the arrangement'));
    for (let i = 0; i < this.size; i++) {
      this.arrangement[i] = Math.round(Math.random() * 100);
    }
    this.validate();
  }

  search() {
    let info = '';
    let bad = '';
    if (this.arrangement.length !== 0) {
      let find = parseInt(prompt('Type the item you want to find?'));
      let cont = 0;
      for (let array of this.arrangement) {
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
    if (this.arrangement.length !== 0) {
      let ant;
      for (let j = 0; j < this.size; j++) {
        for (let i = 0; i < this.arrangement.length - 1; i++) {
          if (this.arrangement[i] >= this.arrangement[i + 1]) {
            ant = this.arrangement[i];
            this.arrangement[i] = this.arrangement[i + 1];
            this.arrangement[i + 1] = ant;
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
    if (this.arrangement !== 0) {
      let rig;
      for (let j = 0; j < this.size; j++) {
        for (i = 0; i < this.arrangement.length; i++) {
          if (this.arrangement[i] >= this.arrangement[i + 1]) {
            rig = this.arrangement[i];
            this.arrangement[i] = this.arrangement[i + 1];
            this.arrangement[i + 1] = rig;
          }
        }
        let left;
        for (i = this.arrangement.length - 1; i > 0; i--) {
          if (this.arrangement[i] < this.arrangement[i - 1]) {
            left = this.arrangement[i];
            this.arrangement[i] = this.arrangement[i - 1];
            this.arrangement[i - 1] = left;
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
    if (this.arrangement.length !== 0) {
      for (i = 0; i < this.arrangement.length; i++) {
        for (j = 0; j <= this.arrangement[j]; j++) {
          var ant = 0;
          if (this.arrangement[i] < this.arrangement[j]) {
            ant = this.arrangement[i];
            this.arrangement[i] = this.arrangement[j];
            this.arrangement[j] = ant;
          }
        }
      }
      console.log(this.arrangement);
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  mixture() {
    if (this.arrangement.length !== 0) {
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
      let result = mergeSort(this.arrangement);
      this.arrangement = result;
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }

  }
  selection() {
    if (this.arrangement.length !== 0) {
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
      let result = selectionSort(this.arrangement);
      this.arrangement = result;
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
  }
  print() {
    if (this.arrangement.length !== 0) {
      let info = '';
      for (let array of this.arrangement) {
        info += array + " | ";
      }
      console.log(info);
      this.validate();
    } else {
      alert('The arrangement is empty');
      this.validate();
    }
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
}

let ordered = new Order();
ordered.validate();