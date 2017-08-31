let number = parseInt(prompt('Enter one number'));
let tmp = 0;
for (let i = 1; i <= number; i++) {
  number % i === 0 ? tmp++ : tmp;
}
console.log(tmp === 2 ? "It's a prime number" : "It's not a prime number");
