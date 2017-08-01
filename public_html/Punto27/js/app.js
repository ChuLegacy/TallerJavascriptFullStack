function menu() {
  var option = parseInt(prompt(`Seleccione una opción para ingresar sus datos
1. Datos personales
2. Referencia familiar
3. Referencia laboral
4. Descripción de perfil profesional
5. Imprimir hoja de vida
0. Salir del programa`));
  return option;
}

let option = menu();

validar(option);
function validar(option) {
  switch (option) {
    case 1:
      window.Person = dataPerson();
      let option = menu();
      validar(option);
      break;
    case 5:
      imprimir(window.Person);
      break;
    default:

      break;
  }
}

function dataPerson() {
  let name = prompt('Cual es tu nombre?');
  let lastName = prompt('Cual es tu lastName?');
  let phone = prompt('Cual es tu phone?');
  let email = prompt('Cual es tu email?');

  var Persona = {
    name,
    lastName,
    phone,
    email
  };
  return Persona;
}
function imprimir(persona) {
  for (var i in persona) {
    console.log(`${i} : ${persona[i]}`);
  }
}




