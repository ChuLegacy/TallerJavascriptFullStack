let i = 0,
        numbers = [];
do {
  numbers[i] = parseInt(prompt('Write one number'));
  i++;
} while (i < 10)
let pair = [],
        p = 0,
        prime = [],
        m = 0,
        j = 1;
for (let number of numbers) {
  let c = 0,
          divisible = [];
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
let add = 0,
        sum = pair.map((e) => {
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