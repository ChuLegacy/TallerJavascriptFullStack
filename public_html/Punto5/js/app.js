let name = document.getElementById('name');
let idType = document.getElementById('idType');
let idNumber = document.getElementById('id_number');
let data = document.getElementById('data');

data.addEventListener('click', () => {
  console.log(`name: ${name.value}\n`, `Id Type: ${idType.value}\n`, `Id Number: ${idNumber.value}\n`);
});
