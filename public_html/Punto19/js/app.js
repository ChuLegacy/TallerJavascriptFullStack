let number = parseInt(prompt('Enter number integer'));
console.log(Math.sign(number) === -1 ? number * -1 : 'You must enter a number less than zero');