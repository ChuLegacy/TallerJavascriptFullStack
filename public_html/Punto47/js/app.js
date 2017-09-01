$(() => {


  let asterisc = '*';
  let container = $('#text').parent();
//  console.log(container);
  do {
    let p = $(container).add('<p>');

    p.appendTo(container);
    p.text('hola');
    console.log(p);
//    text(asterisc);
//    console.log(p);

  } while (1 === 2);

  $('#modal').modal('show');

});