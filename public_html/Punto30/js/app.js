function config() {
  let option = parseInt(prompt(`Configuracion del Software de Nómina
1. Seleccione idioma
2. Configurar
3. Continuar
0. Salir`));
  return option;
}
function configuration() {
  let option = parseInt(prompt(`Configuracion del Software de Nómina
1. Nombre de la empresa
2. Salario minimo
3. A partir de cuantos salarios minimos se cobra retencion en la fuente
4. Porcentaje de retencion en la fuente
5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte
6. Cuanto es el auxilio de transporte
7. Cantidad de horas laborables al mes
8. Volver
0. Salir del programa`));
  return option;
}
function name() {
  let name = prompt('Por favir digite el nombre de tu empresa');
  localStorage.name = name;
  validateConfiguration();
  return name;
}
function salaryMin() {
  let salary = parseInt(prompt('Por favir digite el salario de tu empresa'));
  localStorage.salary = salary;
  validateConfiguration();
  return salary;

}
function minRetention() {
  let mRetention = parseInt(prompt('Apartir de cuantos salarios minimos se cobrara retencion en la fuente?'));
  localStorage.mRetention = mRetention;
  validateConfiguration();
  return mRetention;

}
function percentage() {
  let percentageR = parseInt(prompt('Porcentaje de retencion en la fuente? (%)'));
  localStorage.percentage = percentageR;
  validateConfiguration();
  return percentageR;
}
function maxSalary() {
  let mSalary = parseInt(prompt('Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte?'));
  localStorage.mSalary = mSalary;
  validateConfiguration();
  return mSalary;
}
function aux() {
  let aux = parseInt(prompt('Cuanto es el auxilio de transporte?'));
  localStorage.aux = aux;
  validateConfiguration();
  return aux;
}
function horasM() {
  let h = parseInt(prompt('Cantidad de horas laborables al mes?'));
  localStorage.horas = h;
  validateConfiguration();
  return h;
}
function validateConfiguration() {
  let option = configuration();
  switch (option) {
    case 1:
      name();
      break;
    case 2:
      salaryMin();
      break;
    case 3:
      minRetention();
      break;
    case 4:
      percentage();
      break;
    case 5:
      maxSalary();
      break;
    case 6:
      aux();
      break;
    case 7:
      horasM();
      break;
    case 8:
      validate();
      break;
    case 0:
      alert('Bay');

      break;
    default:
      validateConfiguration();
      break;
  }
}
function continuar() {
  let option = parseInt(prompt(`Software de Nómina
1. Gestion de empleados
2. Registrar horas laboradas
3. Generar nomina
4. Imprimir comprobante de pago
0. Salir del programa`));
  return option;
}
function gestionEmpleados() {
  let option = parseInt(prompt(`1. Agregar
2. Modificar
3. Eliminar
4. Volver
0. Salir del programa`));
  console.log(`+---------------------------------------------------------------------+`);
  console.log(`|-----Cedula-----|-----Nombre-----|-----Apellidos-----|-----Cargo-----|`);
  console.log(`+---------------------------------------------------------------------+`);
  let personal = JSON.parse(localStorage.getItem('empleados'));
  for (let empleado in personal) {
    console.log(`|-----${personal[empleado].cedula}-----|-----${personal[empleado].nombre}-----|-----${personal[empleado].apellido}-----|-----${personal[empleado].cargo}-----|`);

  }

  return option;
}
function validateGestion() {
  let option = gestionEmpleados();
  switch (option) {
    case 1:
      add();
      break;
    case 2:
      edit();
      break;
    case 3:
      break;
    case 4:
      break;
    case 0:
      break;
    default:
      break;
  }
}
let empleados = [];
function add() {
  let cedula = prompt(`Cedula del nuevo empleado?`);
  let nombre = prompt(`Nombre del nuevo empleado?`);
  let apellido = prompt(`Apellido del nuevo empleado?`);
  let cargo = prompt(`Cargo del nuevo empleado?`);
  let personal = {
    cedula,
    nombre,
    apellido,
    cargo
  };
  if (localStorage.empleados === undefined) {
    empleados = [
      personal
    ];
  } else {
    empleados.push(personal);

  }
  localStorage.setItem('empleados', JSON.stringify(empleados));
  validateGestion();
}
function edit() {
  let personal = JSON.parse(localStorage.getItem('empleados'));
  for (let empleado in personal) {
    console.log(`|-----${personal[empleado].cedula}-----|-----${personal[empleado].nombre}-----|-----${personal[empleado].apellido}-----|-----${personal[empleado].cargo}-----|`);
  }
  function validateContinuar() {
    let option = continuar();
    switch (option) {
      case 1:
        validateGestion();
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 0:
        break;
      default:
        validateContinuar();
        break;
    }

  }
  function validate() {
    let option = config();
    switch (option) {
      case 2:
        validateConfiguration();
        break;
      case 3:
        validateContinuar();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        break;
    }
  }

  validate();