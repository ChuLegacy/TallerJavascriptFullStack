$(() => {
  $('#modal1').modal('show');
  $('#form').submit((e) => {
    e.preventDefault();
    var value = $('#modal1').find('input').val();
    var resp;
    if (value % 2 === 0) {
      resp = ' Es un numero par';
    } else {
      resp = ' No es un numero par';
    }
//    resp = cont === 2 ? ' Es un numero par' : ' No es un numero par';
    $('#modal1').modal('hide');
    $('#resp').text('The number: ' + value + resp);
    $('#modal2').modal('show');
  });



});