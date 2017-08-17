$(() => {
  $('#modal1').modal('show');
  $('#form').submit((e) => {
    e.preventDefault();
    var value = $('#modal1').find('input').val();
    let cont = 0;
    var resp;
    for (let i = 1; i <= value; i++) {
      if (value % i === 0) {
        cont++;
      }
    }
    resp = cont === 2 ? ' Es un numero primo' : ' No es un numero primo';
    $('#modal1').modal('hide');
    $('#resp').text('The number: ' + value + resp);
    $('#modal2').modal('show');
  });



});