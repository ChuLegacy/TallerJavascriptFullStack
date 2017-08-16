$(() => {
  $('#form').submit((e) => {
    e.preventDefault();
    let nombre = $(' #name').val();
    var type = $('#type').val();
    let number = $('#id').val();
    var gender = $('#gender').val();
    let height = $('#height').val();
    let live = $('#live')[0].checked;
    console.log(nombre);
    if (type == 1) {
      type = 'Cedula';
    } else if (type == 2) {
      type = 'Pasaporte';
    } else {
      type = 'Other';
    }
    console.log(number);
    if (gender == 1) {
      gender = 'Male';
    } else {
      gender = 'Female';
    }
    console.log(height);
    console.log(live);
    $('#text').text(`Hello, my name is ` + nombre + `, My ` + type + " Number is " + number + ", Biological Gender " + gender + ", My height is " + height + " mts " + " is it true that I live in Cartago " + live);
    $('#modal').modal('show');
  });
});