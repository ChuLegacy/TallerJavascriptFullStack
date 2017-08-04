let i = 0;
let numbers = [];
/*
 * ciclo para do while para pedir los numeros
 */
do {
  numbers[i] = parseInt(prompt('Write one number'));
  i++;
} while (i < 10)
/*
 * Variables para guardar en otro arreglo los pares
 */
let pair = [];
let p = 0;
/*
 * Variable para guardar en otro arreglo numeros primos
 */
let prime = [];
let m = 0;
let j = 1;
for (let number of numbers) {
  let c = 0;
  let divisible = [];

  if (number % 2 === 0) {
    pair[p] = number;
    p++;
  }
  for (j = 1; j < number + 1; j++) {
    if (number % j === 0) {
      divisible[c] = number;
      c++;
    }
  }
  if (divisible.length === 2) {
    prime[m] = number;
    m++;
  }
}
console.log(`These are even numbers:  ${pair.toString()}`);
console.log(`These are the prime numbers:  ${prime.toString()}`);
let add = 0;
let sum = pair.map((e) => {
  add = add + e;
});
console.log(`This is the sum of even numbers: ${add}`);
let prompi = add / pair.length;
add = 0;
sum = prime.map((e) => {
  add = add + e;
});
console.log(`This is the sum of prime numbers: ${add}`);
console.log(`This is the average of even numbers ${prompi}`);
console.log(`This is the average of prime numbers: ${add / prime.length}`);