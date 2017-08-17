$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    let number1 = parseInt($('#number1').val());
    let number2 = parseInt($('#number2').val());
    let sum = number1 + number2;
    let rest = number1 - number2;
    let multiplication = number1 * number2;
    let division = number1 / number2;
    $('#modal').find('p').eq(0).text('The result of sum is: ' + sum);
    $('#modal').find('p').eq(1).text('The result of subtraction is: ' + rest);
    $('#modal').find('p').eq(2).text('The result of multiplication is: ' + multiplication);
    $('#modal').find('p').eq(3).text('The result of division is: ' + division);

    $('#modal').modal('show');
  });
});