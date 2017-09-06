$(() => {
  let text = $('#text');
  text.html = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*';
  // let x = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*',
    let y = '*',
    j = 1;
  while (j === 1) {
    for (let i = 0; i < 5; i++) {
      if (text.html === '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*') {
        $('#text').append(`${text.html} <br>`);

      }
      debugger
      let tmp = text.text().slice(1) + y;
      $('#text').append(`${text.text = tmp} <br>`);
    }
    j++;
  }

  $('#modal').modal('show');

});
