let name = document.getElementById('name');
let idType = document.getElementById('idType');
let idNumber = document.getElementById('id_number');
let data = document.getElementById('data');

data.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`name: ${name.value}
Id Type: ${idType.value}
Id Number: ${idNumber.value}`);
});
