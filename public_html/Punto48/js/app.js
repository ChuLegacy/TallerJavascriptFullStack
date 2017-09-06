$(() => {
  let text = $('#text');
  text.html = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *';
  // let x = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*',
    let y = '*',
    j = 1;
  while (j === 1) {
    for (let i = 0; i < 5; i++) {
      if (text.html === '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *') {
        debugger
        $('#text').append(`${text.html} <br>`);
      }
      let tmp = text.html.substr(6) + y;
      debugger
      $('#text').append(`${text.text = tmp} <br>`);
    }
    j++;
  }

  $('#modal').modal('show');

});
