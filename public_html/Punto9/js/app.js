let number = parseInt(prompt('Enter one number'));

function primo(number) {
  if (number === 2) {
    return 'Es un numero primo';
  }
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      return 'No es un numero Primo';
    } else {
      return 'Es un numero primo';
    }
  }
}
console.log(primo(number));
