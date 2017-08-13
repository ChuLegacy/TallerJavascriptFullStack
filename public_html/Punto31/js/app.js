class Numbers {
  constructor(size) {
    this.size = size;
    this.number;
    this.paires = [];
    this.prime = [];
  }
  capture() {
    this.number = [];
    for (let i = 0; i < this.size; i++) {
      this.number[i] = parseInt(prompt('Enter to number'));
    }
    return this.number;
  }
  pair() {
    let i = 0;
    let j = 0;
    while (i < this.number.length) {
      if (this.number[i] % 2 === 0) {
        this.paires[j] = this.number[i];
        j++;
      }
      i++;
    }
    let info = '';
    this.paires.forEach((e) => {
      info += e + " ";
    });
    console.log(`These are even numbers ${info}`);
    return this.paires;
  }
  primes() {
    let m = 0;
    for (let num of this.number) {
      let tmp = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          tmp++;
        }
      }
      if (tmp === 2) {
        this.prime[m] = num;
        m++;
      }
    }
    let info = '';
    this.prime.forEach((e) => {
      info += e + " ";
    });
    console.log(`These are the prime numbers ${info}`)
    return this.prime;
  }
  sumPrime() {
    let info = 0;
    this.prime.forEach((e) => {
      info += e;
    });
    console.log(`This is the sum of prime numbers ${info}`);
  }
  sumPair() {
    let info = 0;
    this.paires.forEach((e) => {
      info += e;
    });
    console.log(`This is the sum of even numbers ${info}`);
  }
  promPrime() {
    let size = this.prime.length;
    let info = 0;
    this.prime.forEach((e) => {
      info += e;
    });
    console.log(`The average prime number is ${info / size} `);
  }
  promPair() {
    let size = this.paires.length;
    let info = 0;
    this.paires.forEach((e) => {
      info += e;
    });
    console.log(`The average of even numbers is ${info / size}`);
  }
}

let size = parseInt(prompt('What is the size of your arrangement?'));

let ciclos = new Numbers(size);

ciclos.capture();
ciclos.pair();
ciclos.primes();
ciclos.sumPrime();
ciclos.sumPair();
ciclos.promPrime();
ciclos.promPair();