let number1 = parseInt(prompt('Enter one number')),
        number2 = parseInt(prompt('Enter other number'));
console.log(`${number1} a la ${number2} es: ${Math.pow(number1, number2)}
${number2} a la ${number1} es: ${Math.pow(number2, number1)}
The multiplication between ${number1} and ${number2} es: ${ number1 * number2}
The division between ${number1} and ${number2} es: ${ number1 / number2}
The division between ${number2} and ${number1} es: ${ number2 / number1 }
The module of the division between ${number1} and ${number2} is: ${ number1 % number2}`);