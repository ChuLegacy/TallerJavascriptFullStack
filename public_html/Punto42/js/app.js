$('#modal').find('p').eq(0).text('50 to 10 is: ' + Math.pow(50, 10));
$('#modal').find('p').eq(1).text('10 to 50 is: ' + Math.pow(10, 50));
$('#modal').find('p').eq(2).text('The multiplication between 50 and 10 is : ' + (50 * 10));
$('#modal').find('p').eq(3).text('The division between 50 and 10 is: ' + (50 / 10));
$('#modal').find('p').eq(4).text('The division between 10 and 50 is: ' + (10 / 50));
$('#modal').find('p').eq(5).text('The division module between 50 and 10 is: ' + (50 % 10));
$('#modal').find('p').eq(6).text('The subtraction between 50 and 10 is: ' + (50 - 10));
$('#modal').find('p').eq(7).text('The sum between 50 and 10 is: ' + (50 + 10));
$('#flag').modal('show');