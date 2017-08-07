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
var configG = [];
function name() {
  let name = prompt('Por favor digite el nombre de tu empresa');
  validateConfiguration();
  global = {
    name
  };
  configG = [
    global
  ];

  localStorage.setItem('config', JSON.stringify(configG));

  return configG;
}
function salaryMin() {
  let salary = parseInt(prompt('Por favir digite el salario de tu empresa'));
  global = {
    salary
  };
  if (localStorage.getItem('config') !== undefined) {
    configG = JSON.parse(localStorage.getItem('config'));
    configG.push(global);

  } else {
    configG = [
      global
    ];
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;

}
function minRetention() {
  let mRetention = parseInt(prompt('Apartir de cuantos salarios minimos se cobrara retencion en la fuente?'));
  global = {
    mRetention
  };
  configG = JSON.parse(localStorage.getItem('config'));
  config.push(global);
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;

}
function percentage() {
  let percentageR = parseInt(prompt('Porcentaje de retencion en la fuente? (%)'));
  global = {
    percentageR
  };
  configG = JSON.parse(localStorage.getItem('config'));
  configG.push(global);
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function maxSalary() {
  let mSalary = parseInt(prompt('Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte?'));
  global = {
    mSalary
  };
  configG = JSON.parse(localStorage.getItem('config'));
  configG.push(global);
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function aux() {
  let aux = parseInt(prompt('Cuanto es el auxilio de transporte?'));
  global = {
    aux
  };
  configG = JSON.parse(localStorage.getItem('config'));
  configG.push(global);
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function horasM() {
  let h = parseInt(prompt('Cantidad de horas laborables al mes?'));
  global = {
    h
  };
  configG = JSON.parse(localStorage.getItem('config'));
  configG.push(global);
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
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
  if (personal !== null) {
    for (let emple of personal) {
      if (emple !== null && emple.cedula !== undefined) {
        console.log(`|-----${emple.cedula}-----|-----${emple.nombre}-----|-----${emple.apellido}-----|-----${emple.cargo}-----|`);
      }
    }
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
      eliminar();
      break;
    case 4:
      validateContinuar();
      break;
    case 0:
      break;
    default:
      break;
  }
}
let empleados = [];
function add() {
  empleados = JSON.parse(localStorage.getItem('empleados'));
  if (empleados === null) {
    var cedula = prompt(`Cedula del nuevo empleado?`);

  } else {
    let flag = false;
    do {
      var cedula = prompt(`Cedula del nuevo empleado?`);
      for (let config of empleados) {
        for (let e in config) {
          if (config[e] == cedula) {
            flag = config[e];
          }
        }
      }
    } while (cedula == flag);
  }

  let nombre = prompt(`Nombre del nuevo empleado?`);
  let apellido = prompt(`Apellido del nuevo empleado?`);
  let cargo = prompt(`Cargo del nuevo empleado?`);
  empleados = JSON.parse(localStorage.getItem('config'));
  flag = false;
  do {
    var salario = parseInt(prompt(`Salario del nuevo empleado?`));
    for (config of empleados) {
      for (e in config) {
        if (e === 'salary') {
          flag = config[e];
        }
      }
    }
  } while (salario < flag);
  empleados = JSON.parse(localStorage.getItem('empleados'));
  let personal = {
    cedula,
    nombre,
    apellido,
    cargo,
    salario
  };
  if (empleados === null) {
    empleados = [
      personal
    ];
  } else {
    empleados.push(personal);
  }

  localStorage.setItem('empleados', JSON.stringify(empleados));
  validateGestion();
  return personal;
}
function edit() {

  let empleados = JSON.parse(localStorage.getItem('empleados'));
  var object = 0;
  var flag = false;

  do {

    var cedula = prompt(`Por favor ingrese el numero de cedula?`);
    for (i = 0; i < empleados.length; i++) {
      for (let datas in empleados[i]) {
        if (empleados[i][datas] === cedula) {
          flag = true;
          object = i;

        }
      }
    }
  } while (flag === false);

  if (empleados === null) {
    var cedula = prompt(`Cedula del nuevo empleado?`);

  } else {
    let flag = false;
    do {
      var cedula = prompt(`Cedula del nuevo empleado?`);
      for (let config of empleados) {
        for (let e in config) {
          if (config[e] == cedula) {
            flag = config[e];
          }
        }
      }
    } while (cedula == flag);
  }
  let nombre = prompt(`Nombre del nuevo empleado?`);
  let apellido = prompt(`Apellido del nuevo empleado?`);
  let cargo = prompt(`Cargo del nuevo empleado?`);
  let configG = JSON.parse(localStorage.getItem('config'));
  flag = false;
  do {
    var salario = parseInt(prompt(`Salario del nuevo empleado?`));
    for (config of configG) {
      for (e in config) {
        if (e === 'salary') {
          flag = config[e];
        }
      }
    }
  } while (salario < flag);
  empleados = JSON.parse(localStorage.getItem('empleados'));
  let personal = {
    cedula,
    nombre,
    apellido,
    cargo,
    salario
  };
  empleados[object] = personal;
  localStorage.setItem('empleados', JSON.stringify(empleados));
  validateGestion();
  return empleados;
}
function eliminar() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  let flag = false;
//  do {
  let cedula = prompt('Numero de cedula del empleado que deseas eliminar?');
  var object = 0;
  for (let i = 0; i < empleados.length; i++) {
    for (let emple in empleados[i]) {
      if (empleados[i][emple] == cedula) {
        var object = i;
        flag = true;
        if (flag === true) {
          var con = confirm(`Deseas Eliminar a ${empleados[object].nombre} ${empleados[object].apellido}`);
          if (con) {
            flag = true;
          } else {
            flag = false;
            validateGestion();
            break;
          }
        }
      }
    }
  }
  if (!flag) {
    alert(`El numero de cedula ${cedula} no se encuntra registrado`);
  }


  if (flag) {
    empleados.splice(object, 1);

  }
  localStorage.setItem('empleados', JSON.stringify(empleados));
  validateGestion();
  return empleados;
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
      validate();
      break;
  }
}

validate();