$('#first').modal('show');
$('#send').submit((e) => {
  e.preventDefault();
  $('#first').modal('hide');
  let name = $('#name').val();
  var type = $('#type').val();
  let number = $('#number').val();
  if (type == 1) {
    type = 'Cedula';
  } else if (type == 2) {
    type = 'Pasaporte';
  } else {
    type = 'Other';
  }
  $('#text').text('Hello, my name is ' + name + ', My ' + type + ' Number is ' + number);

  $('#origin').modal('show');
});