let name = document.getElementById('name');
let idType = document.getElementById('idType');
let idNumber = document.getElementById('id_number');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
let live = document.getElementById('live');
let data = document.getElementById('data');

data.addEventListener('click', () => {
  console.log(`name: ${name.value}\n`, `Id Type: ${idType.value}\n`, `Id Number: ${idNumber.value}\n`, `Gender: ${gender.value}\n`, `Height: ${height.value}\n`, `Live In Cartago? ${live.value}\n`);

});
