let name = document.getElementById('name');
let idType = document.getElementById('idType');
let idNumber = document.getElementById('id_number');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
let live = document.getElementById('live');
let data = document.getElementById('data');

data.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`name: ${name.value}
Id Type: ${idType.value}
Id Number: ${idNumber.value}
Gender: ${gender.value}
Height: ${height.value}
Live In Cartago? ${live.checked}`);
});