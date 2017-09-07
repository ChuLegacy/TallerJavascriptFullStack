$(() => {
  let text = $('#text');
  let asterisc = text.html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*');
  let spaces = '' ;
for (let i = 1; i < 6; i++){
  spaces += '*';
    let tmp = asterisc.text().slice(i) + spaces ;
    $('#container').append(`<p>${tmp}</p>`);
}
  $('#modal').modal('show');
});
