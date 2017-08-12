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
  global = {
    name
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }


  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function salaryMin() {
  let salary = parseInt(prompt('Por favir digite el salario de tu empresa'));
  global = {
    salary
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
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
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
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
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
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
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
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
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
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
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
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
  console.clear();
  console.log(`+---------------------------------------------------------------------+`);
  console.log(`|-----Cedula-----|-----Nombre-----|-----Apellidos-----|-----Cargo-----|`);
  console.log(`+---------------------------------------------------------------------+`);
  let personal = JSON.parse(localStorage.getItem('empleados'));
  if (personal !== null) {
    let ant = 0;
    for (let i = 0; i <= personal.length - 1; i++) {

      if (personal[i + 1] !== undefined) {

        if (personal[i].cedula > personal[i + 1].cedula) {
          ant = personal[i];
          personal[i] = personal[i + 1];
          personal[i + 1] = ant;
        }
      }
    }
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
      alert('Bay');
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
      var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
      for (let config of empleados) {
        for (let e in config) {
          if (config[e] === cedula) {
            flag = config[e];
          }
        }
      }
    } while (cedula === flag);
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
    var cedula = parseInt(prompt(`Por favor ingrese el numero de cedula?`));
    for (i = 0; i < empleados.length; i++) {
      for (let datas in empleados[i]) {
        if (empleados[i][datas] == cedula) {
          flag = true;
          object = i;
        }
      }
    }
  } while (flag === false);
  if (empleados === null) {
    var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
  } else {
    let flag = false;
    do {
      var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
      for (let config of empleados) {
        for (let e in config) {
          if (config[e] === cedula) {
            flag = config[e];
          }
        }
      }
    } while (cedula === flag);
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
  let cedula = parseInt(prompt('Numero de cedula del empleado que deseas eliminar?'));
  var object = 0;
  for (let i = 0; i < empleados.length; i++) {
    for (let emple in empleados[i]) {
      if (empleados[i][emple] === cedula) {
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

function hoursLab() {
  if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
    alert('No tienes configurado tu sistema o no tienes empleados registrados');
    validate();
  } else {
    var day = 0;
//  Obtener los dias del mes actual
    let months = new Date();
    switch (months.getMonth()) {
      case 0:
        day = 31;
        break;
      case 1:
        day = 28;
        break;
      case 2:
        day = 31;
        break;
      case 3:
        day = 30;
        break;
      case 4:
        day = 31;
        break;
      case 5:
        day = 30;
        break;
      case 6:
        day = 31;
        break;
      case 7:
        day = 31;
        break;
      case 8:
        day = 30;
        break;
      case 9:
        day = 31;
        break;
      case 10:
        day = 30;
        break;
      case 11:
        day = 31;
        break;
    }
//  obtener las horas laborables de la empresa desde el localStorage
    var hoursMin = 0;
    let hoursConfig = JSON.parse(localStorage.getItem('config'));
    hoursConfig.forEach((e) => {
      for (i in e) {
        if (i === 'h') {
          var hoursMin = e[i];
        }
      }
    });
//  Obtener el nombre de la empresa desde el localStorage
    let names = '';
    JSON.parse(localStorage.getItem('config')).forEach((e) => {
      if (e.name !== undefined) {
        names = e.name;
      }
    });
    let find = parseInt(prompt('Cedula del empleado a registrar las horas?'));
    let emple = JSON.parse(localStorage.getItem('empleados'));
    var tmp = 0;
    emple.forEach((e) => {
      if (e.cedula == find) {
        tmp++;
        if (tmp !== 0) {
          let i = 0;
          do {
            if (i !== 0) {
              alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
            }
            i++;
            let daytimeHours = parseInt(prompt('Cuantas horas diurnas has trabajado'));
            console.log(daytimeHours);
            console.log(hoursMin);
          } while (daytimeHours > hoursMin);
          i = 0;
          do {
            if (i !== 0) {
              alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
            }
            i++;
            let nightHours = parseInt(prompt('Cuantas horas nocturnas has trabajado'));
          } while ((nightHours > hoursMin) || (daytimeHours + nightHours > hoursMin));
          i = 0;
          do {
            if (i !== 0) {
              alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
            }
            i++;
            let daytimeSundayHours = parseInt(prompt('Cuantas horas dominicales diurnas has trabajado'));
          } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
          i = 0;
          do {
            if (i !== 0) {
              alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
            }
            i++;
            let nightSundayHours = parseInt(prompt('Cuantas horas dominicales nocturnas has trabajado'));
          } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));

          let daytimeOvertime = parseInt(prompt('Cuantas horas extras diurnas has trabajado'));
          let nightOvertime = parseInt(prompt('Cuantas horas extras nocturnas has trabajado'));
          let daytimeExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra diurnas has trabajado'));
          let nightExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra nocturnas has trabajado'));

          let personal = {
            daytimeHours,
            nightHours,
            daytimeSundayHours,
            nightSundayHours,
            daytimeOvertime,
            nightOvertime,
            daytimeExtraSundayHours,
            nightExtraSundayHours
          };
        }
      } else {
        alert('El empleado no se encuentra registrado');
        validateContinuar();
      }
    });

  }
}

function validateContinuar() {
  let option = continuar();
  switch (option) {
    case 1:
      validateGestion();
      break;
    case 2:
      hoursLab();
      break;
    case 3:
      break;
    case 4:
      break;
    case 0:
      alert('chao');
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