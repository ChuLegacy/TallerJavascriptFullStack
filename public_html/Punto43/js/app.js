let number1 = parseInt(prompt('Write to number'));
let number2 = parseInt(prompt('Write to number'));



$('#modal').find('p').eq(0).text(number1 + ' to ' + number2 + ' is: ' + Math.pow(number1, number2));
$('#modal').find('p').eq(1).text(number2 + ' to ' + number1 + ' is: ' + Math.pow(number2, number1));
$('#modal').find('p').eq(2).text('The multiplication between ' + number1 + ' and ' + number2 + ' is : ' + (number1 * number2));
$('#modal').find('p').eq(3).text('The division between ' + number1 + ' and ' + number2 + ' is: ' + (number1 / number2));
$('#modal').find('p').eq(4).text('The division between 10 and 50 is: ' + (number2 / number1));
$('#modal').find('p').eq(5).text('The division module between ' + number1 + ' and ' + number2 + ' is: ' + (number1 % number2));
$('#modal').find('p').eq(6).text('The subtraction between ' + number1 + ' and ' + number2 + ' is: ' + (number1 - number2));
$('#modal').find('p').eq(7).text('The sum between ' + number1 + ' and ' + number2 + ' is: ' + (number1 + number2));
$('#flag').modal('show');