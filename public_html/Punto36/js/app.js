class All {
  constructor() {
    this.configG = [];
    this.empleados = [];

  }
  config() {
    let option = parseInt(prompt(`Configuracion del Software de Nómina
    1. Seleccione idioma
    2. Configurar
    3. Continuar
    0. Salir`));
    return option;
  }
  idioma() {
    let option = parseInt(prompt(`Configuracion del Software de Nómina
       Seleccione idioma del software
    1. Español
    2. English
    0. Salir`));
    return option;
  }
  configuration() {
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
  name() {
    let name = prompt('Por favor digite el nombre de tu empresa');
    let global = {
      name
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  salaryMin() {
    let salary = parseInt(prompt('Por favir digite el salario de tu empresa'));
    let global = {
      salary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  minRetention() {
    let mRetention = parseInt(prompt('Apartir de cuantos salarios minimos se cobrara retencion en la fuente?'));
    let global = {
      mRetention
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  percentage() {
    let percentageR = parseInt(prompt('Porcentaje de retencion en la fuente? (%)'));
    let global = {
      percentageR
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  maxSalary() {
    let mSalary = parseInt(prompt('Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte?'));
    let global = {
      mSalary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  aux() {
    let aux = parseInt(prompt('Cuanto es el auxilio de transporte?'));
    let global = {
      aux
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  horasM() {
    let h = parseInt(prompt('Cantidad de horas laborables al mes?'));
    let global = {
      h
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  validateConfiguration() {
    let option = this.configuration();
    switch (option) {
      case 1:
        this.name();
        break;
      case 2:
        this.salaryMin();
        break;
      case 3:
        this.minRetention();
        break;
      case 4:
        this.percentage();
        break;
      case 5:
        this.maxSalary();
        break;
      case 6:
        this.aux();
        break;
      case 7:
        this.horasM();
        break;
      case 8:
        this.validate();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validateConfiguration();
        break;
    }
  }
  continuar() {
    let option = parseInt(prompt(`Software de Nómina
    1. Gestion de empleados
    2. Registrar horas laboradas
    3. Generar nomina
    4. Imprimir comprobante de pago
    0. Salir del programa`));
    return option;
  }
  gestionEmpleados() {
    let option = parseInt(prompt(`
    1. Agregar
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
  validateGestion() {
    let option = this.gestionEmpleados();
    switch (option) {
      case 1:
        this.add();
        break;
      case 2:
        this.edit();
        break;
      case 3:
        this.eliminar();
        break;
      case 4:
        this.validateContinuar();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validateGestion();
        break;
    }
  }
  add() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    if (this.empleados === null) {
      var cedula = prompt(`Cedula del nuevo empleado?`);
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
        for (let config of this.empleados) {
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
    this.empleados = JSON.parse(localStorage.getItem('config'));
    let flag = false;
    do {
      var salario = parseInt(prompt(`Salario del nuevo empleado?`));
      for (let config of this.empleados) {
        for (let e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (this.empleados === null) {
      this.empleados = [
        personal
      ];
    } else {
      this.empleados.push(personal);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return personal;
  }
  edit() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    var object = 0;
    var flag = false;
    do {
      var cedula = parseInt(prompt(`Por favor ingrese el numero de cedula?`));
      for (let i = 0; i < this.empleados.length; i++) {
        for (let datas in this.empleados[i]) {
          if (this.empleados[i][datas] == cedula) {
            flag = true;
            object = i;
          }
        }
      }
    } while (flag === false);
    if (this.empleados === null) {
      var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
        for (let config of this.empleados) {
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
    this.configG = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salario del nuevo empleado?`));
      for (let config of this.configG) {
        for (let e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    this.empleados[object] = personal;
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return this.empleados;
  }
  eliminar() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let flag = false;
    let cedula = parseInt(prompt('Numero de cedula del empleado que deseas eliminar?'));
    var object = 0;
    for (let i = 0; i < this.empleados.length; i++) {
      for (let emple in this.empleados[i]) {
        if (this.empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`Deseas Eliminar a ${this.empleados[object].nombre} ${this.empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              this.validateGestion();
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
      this.empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return this.empleados;
  }
  hoursLab() {
    if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
      alert('No tienes configurado tu sistema o no tienes empleados registrados');
      this.validate();
    } else {
//  obtener las horas laborables de la empresa desde el localStorage
      var hoursMin = 0;
      let hoursConfig = JSON.parse(localStorage.getItem('config'));
      hoursConfig.forEach((e) => {
        for (let i in e) {
          if (i === 'h') {
            hoursMin = e[i];
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
      var salary = 0;
      var id = '';
      emple.forEach((e) => {
        if (e.cedula == find) {
          id = e.cedula;
          tmp++;
          salary = e.salario;
        }
      });
      if (tmp !== 0) {
        let i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var daytimeHours = parseInt(prompt('Cuantas horas diurnas has trabajado'));
        } while (daytimeHours > hoursMin);
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var nightHours = parseInt(prompt('Cuantas horas nocturnas has trabajado'));
        } while ((nightHours > hoursMin) || ((daytimeHours + nightHours) > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var daytimeSundayHours = parseInt(prompt('Cuantas horas dominicales diurnas has trabajado'));
        } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var nightSundayHours = parseInt(prompt('Cuantas horas dominicales nocturnas has trabajado'));
        } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));
        let daytimeOvertime = parseInt(prompt('Cuantas horas extras diurnas has trabajado'));
        let nightOvertime = parseInt(prompt('Cuantas horas extras nocturnas has trabajado'));
        let daytimeExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra diurnas has trabajado'));
        let nightExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra nocturnas has trabajado'));
        // Saber cuanto es el precio hora del trabajador
        let pHours = (salary / hoursMin);
        let hoursDay = pHours;
        let hoursNight = (pHours * 35) / 100;
        let daySundayHours = (pHours * 75) / 100;
        let sundayNightHours = (pHours * 110) / 100;
        let hoursExtraDay = (pHours * 25) / 100;
        let hoursExtraNight = (pHours * 75) / 100;
        let hoursSundayExtraDay = (pHours * 100) / 100;
        let hoursSundayExtraNight = (pHours * 150) / 100;
        // Objeto con las horas trabajadas
        let hoursLaborable = {
          daytimeHours,
          nightHours,
          daytimeSundayHours,
          nightSundayHours,
          daytimeOvertime,
          nightOvertime,
          daytimeExtraSundayHours,
          nightExtraSundayHours
        };
        // Objeto con el valor de las horas laboradas
        let vHoursLab = {
          'Horas Diurnas': hoursDay * daytimeHours,
          'Horas Nocturnas': hoursNight * nightHours,
          'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
          'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
          'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
          'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
          'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
          'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
        };
        let hoursLaborales = {
          id,
          hoursLaborable,
          vHoursLab
        };
        let horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
        if (horasLaboradas === null) {
          let horasLaboradas = [hoursLaborales];
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        } else {
          horasLaboradas.push(hoursLaborales);
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        }
        this.validateContinuar();
      } else {
        alert('El empleado no se encuentra registrado');
        this.validateContinuar();
      }
    }
  }
  nomina() {
    console.clear();
    if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
      alert('No tienes configurado tu sistema, no tienes empleados registrados o no tienes horas registradas');
      this.validate();
    } else {
      var auxTransport = JSON.parse(localStorage.getItem('config'));
      var salary = 0;
      var salaryRetention = 0;
      var percentageRetention = 0;
      var mSalary = 0;
      auxTransport.forEach((e) => {
        for (let i in e) {
          switch (i) {
            case 'salary':
              salary = e[i];
              break;
            case 'mRetention':
              salaryRetention = e[i];
              break;
            case 'percentageR':
              percentageRetention = e[i];
              break;
            case 'aux':
              auxTransport = e[i];
              break;
            case 'mSalary':
              mSalary = e[i];
              break;
          }
        }
      });
      var array = [];
      let empleados = JSON.parse(localStorage.getItem('empleados'));
      let ant = 0;
      for (let i = 0; i <= empleados.length - 1; i++) {
        if (empleados[i + 1] !== undefined) {
          if (empleados[i].cedula > empleados[i + 1].cedula) {
            ant = empleados[i];
            empleados[i] = empleados[i + 1];
            empleados[i + 1] = ant;
          }
        }
      }
      var nominas = [];
      console.log(` -- Cedula -- Cargo -- Total A Pagar --`);
      empleados.forEach((e) => {
        let hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
        hoursLaborables.forEach((j) => {
          if (j.id == e.cedula) {
            for (let hours in j.vHoursLab) {
              array.push(j.vHoursLab[hours]);
            }
            var total = 0;
            array = array.slice(-8);
            array.forEach((i) => {
              total += i;
            });
            if (total > (salary * salaryRetention)) {
              let subs = total * percentageRetention / 100;
              total -= subs;
            }
            if (total <= (salary * mSalary)) {
              total += auxTransport;
            }
            if (total <= (salary * 1)) {
              let alimentation = (salary * 20) / 100;
              total += alimentation;
            }
            total = parseInt(total);
            total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = total.split('').reverse().join('').replace(/^[\.]/, '');
            let cedula = e.cedula;
            let cargo = e.cargo;
            let tot = total;
            var nomina = {
              cedula,
              cargo,
              tot
            };
            let nomin = JSON.parse(localStorage.getItem('nomina'));
            if (nomin === null) {
              nominas = [nomina];
              localStorage.setItem('nomina', JSON.stringify(nominas));
            } else {
              nominas.push(nomina);
              localStorage.setItem('nomina', JSON.stringify(nominas));
            }
            console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
          }
        });
      });
    }
    this.validateContinuar();

  }
  pago() {
    console.clear();
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    var config = JSON.parse(localStorage.getItem('config'));
    if (this.empleados === null) {
      alert('No hay empleados registrados');
      this.validateContinuar();
    } else {
      let find = parseInt(prompt('Digite la cedula para el comprobante de pago?'));
      var tmp = 0;
      var name = '';
      var cargo = '';
      var paguis = 0;
      this.empleados.forEach((e) => {
        if (e.cedula == find) {
          tmp++;
          name = e.nombre;
          cargo = e.cargo;
          let pague = JSON.parse(localStorage.getItem('nomina'));
          pague.forEach((j) => {
            if (e.cedula == j.cedula) {
              paguis = j.tot;
            }
          });
        }
      });
      if (tmp === 0) {
        alert('El empleado no se encuentra registrado en la base de datos');
        this.validateContinuar();
      } else {
        console.log(`**********************************************`);
        console.log(`**********************************************`);
        console.log(`**          ${name} || ${cargo}              **`);
        console.log(`**          Recibi de:  ${config[0].name}                 **`);
        console.log(`**  Recibi una suma total de:  ${paguis}    **`);
        console.log(`**********************************************`);
        console.log(`**********************************************`);
      }
    }
    this.validateContinuar();

  }
  validateContinuar() {
    let option = this.continuar();
    switch (option) {
      case 1:
        this.validateGestion();
        break;
      case 2:
        this.hoursLab();
        break;
      case 3:
        this.nomina();
        break;
      case 4:
        this.pago();
        break;
      case 0:
        alert('Adios');
        break;
      default:
        this.validateContinuar();
        break;
    }
  }
  validate() {
    let option = this.config();
    switch (option) {
      case 1:
        let opt = this.idioma();
        switch (opt) {
          case 1:
            this.validate();
            break;
          case 2:
            this.config2();
            break;
          case 3:
            alert('Adios');
            break;
          default:
            this.validate();
            break;
        }
        break;
      case 2:
        this.validateConfiguration();
        break;
      case 3:
        this.validateContinuar();
        break;
      case 0:
        alert('Adios');
        break;
      default:
        this.validate();
        break;
    }
  }
//
//
//
//
// SOftware en ingles
//
//
//
//
  config2() {
    let option = parseInt(prompt(`Payroll Software Setup
1. Select language
2. Configure
3. Continue
0. Departure`));
    return option;
  }
  idioma2() {
    let option = parseInt(prompt(`Payroll Software Setup
Select the software language
1. Spanish
2. English
0. Departure`));
    return option;
  }
  configuration2() {
    let option = parseInt(prompt(`Payroll Software Setup
1. Name of the company
2. Minimum wage
3. How many minimum wages are conserved at the source
4. Percentage retention at source
5. Up to how many minimum wages are needed to pay transport aid
6. How much does transport aid cost?
7. Number of hours of work per month
8. Back
0. Quit the program`));
    return option;
  }
  name2() {
    let name = prompt('Enter the name of your company');
    let global = {
      name
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  salaryMin2() {
    let salary = parseInt(prompt("Enter your company's salary"));
    let global = {
      salary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  minRetention2() {
    let mRetention = parseInt(prompt('How many minimum wages does the withholding tax charge?'));
    let global = {
      mRetention
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  percentage2() {
    let percentageR = parseInt(prompt('Percentage withholding at source? (%)'));
    let global = {
      percentageR
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  maxSalary2() {
    let mSalary = parseInt(prompt('How many minimum wages do you need to pay for transport aid?'));
    let global = {
      mSalary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  aux2() {
    let aux = parseInt(prompt('How much does transport help cost?'));
    let global = {
      aux
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  horasM2() {
    let h = parseInt(prompt('Number of hours of work per month?'));
    let global = {
      h
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        global
      ];
    } else {
      this.configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateconfiguration2();
    return this.configG;
  }
  validateconfiguration2() {
    let option = this.configuration2();
    switch (option) {
      case 1:
        this.name2();
        break;
      case 2:
        this.salaryMin2();
        break;
      case 3:
        this.minRetention2();
        break;
      case 4:
        this.percentage2();
        break;
      case 5:
        this.maxSalary2();
        break;
      case 6:
        this.aux2();
        break;
      case 7:
        this.horasM2();
        break;
      case 8:
        this.validate2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validateconfiguration2();
        break;
    }
  }
  continuar2() {
    let option = parseInt(prompt(`Payroll Software
1. Employee management
2. Record of hours worked
3. Generate payroll
4. Print proof of payment
0. Quit the program`));
    return option;
  }
  gestionEmpleados2() {
    let option = parseInt(prompt(`
1. Add
2. Modify
3. Delete
4. Back
0. Quit the program`));
    console.clear();
    console.log(`+----------------------------------------------------------------------------------+`);
    console.log(`|-----Identification Card-----|-----Name-----|-----Surnames-----|-----Position-----|`);
    console.log(`+----------------------------------------------------------------------------------+`);
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
  validateGestion2() {
    let option = gestionEmpleados2();
    switch (option) {
      case 1:
        this.add2();
        break;
      case 2:
        this.edit2();
        break;
      case 3:
        this.eliminar2();
        break;
      case 4:
        this.validatecontinuar2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validateGestion2();
        break;
    }
  }
  add2() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    if (this.empleados === null) {
      var cedula = prompt(`New employee ID card?`);
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`New employee ID card?`));
        for (let config of this.empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Name of new employee?`);
    let apellido = prompt(`Surname of the new employee?`);
    let cargo = prompt(`New Employee Charge?`);
    this.empleados = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salary of the new employee?`));
      for (let config of this.empleados) {
        for (let e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (this.empleados === null) {
      this.empleados = [
        personal
      ];
    } else {
      this.empleados.push(personal);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion2();
    return personal;
  }
  edit2() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    var object = 0;
    var flag = false;
    do {
      var cedula = parseInt(prompt(`Please enter the ID number?`));
      for (let i = 0; i < this.empleados.length; i++) {
        for (let datas in this.empleados[i]) {
          if (this.empleados[i][datas] == cedula) {
            flag = true;
            object = i;
          }
        }
      }
    } while (flag === false);
    if (this.empleados === null) {
      var cedula = parseInt(prompt(`New Employee ID Card?`));
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`New Employee ID Card?`));
        for (let config of this.empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Name of new employee?`);
    let apellido = prompt(`Surname of the new employee?`);
    let cargo = prompt(`New Employee Charge?`);
    let configG = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salary of the new employee?`));
      for (let config of configG) {
        for (let e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    this.empleados[object] = personal;
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion2();
    return this.empleados;
  }
  eliminar2() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let flag = false;
    let cedula = parseInt(prompt('Identification number of the employee you want to delete?'));
    var object = 0;
    for (let i = 0; i < this.empleados.length; i++) {
      for (let emple in this.empleados[i]) {
        if (this.empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`Delete the ${this.empleados[object].nombre} ${this.empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              this.validateGestion2();
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      alert(`The ID number ${cedula} Not registered`);
    }
    if (flag) {
      this.empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion2();
    return this.empleados;
  }
  hoursLab2() {
    if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
      alert('You have not set up your system or have no registered employees');
      this.validate2();
    } else {
//  obtener las horas laborables de la empresa desde el localStorage
      var hoursMin = 0;
      let hoursConfig = JSON.parse(localStorage.getItem('config'));
      hoursConfig.forEach((e) => {
        for (let i in e) {
          if (i === 'h') {
            hoursMin = e[i];
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
      let find = parseInt(prompt('ID used to record the hours?'));
      let emple = JSON.parse(localStorage.getItem('empleados'));
      var tmp = 0;
      var salary = 0;
      var id = '';
      emple.forEach((e) => {
        if (e.cedula == find) {
          id = e.cedula;
          tmp++;
          salary = e.salario;
        }
      });
      if (tmp !== 0) {
        let i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var daytimeHours = parseInt(prompt('How many hours of day have you worked?'));
        } while (daytimeHours > hoursMin);
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var nightHours = parseInt(prompt('How many hours at night did you work?'));
        } while ((nightHours > hoursMin) || ((daytimeHours + nightHours) > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var daytimeSundayHours = parseInt(prompt('How many daytime hours have you worked'));
        } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var nightSundayHours = parseInt(prompt('How many Sunday night hours have you worked'));
        } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));
        let daytimeOvertime = parseInt(prompt('How many daytime overtime have you worked'));
        let nightOvertime = parseInt(prompt('How many night overtime have you worked'));
        let daytimeExtraSundayHours = parseInt(prompt('How many hours of daytime extra Sunday have you worked'));
        let nightExtraSundayHours = parseInt(prompt('How many Sunday night extra hours have you worked'));
        // Saber cuanto es el precio hora del trabajador
        let pHours = (salary / hoursMin);
        let hoursDay = pHours;
        let hoursNight = (pHours * 35) / 100;
        let daySundayHours = (pHours * 75) / 100;
        let sundayNightHours = (pHours * 110) / 100;
        let hoursExtraDay = (pHours * 25) / 100;
        let hoursExtraNight = (pHours * 75) / 100;
        let hoursSundayExtraDay = (pHours * 100) / 100;
        let hoursSundayExtraNight = (pHours * 150) / 100;
        // Objeto con las horas trabajadas
        let hoursLaborable = {
          daytimeHours,
          nightHours,
          daytimeSundayHours,
          nightSundayHours,
          daytimeOvertime,
          nightOvertime,
          daytimeExtraSundayHours,
          nightExtraSundayHours
        };
        // Objeto con el valor de las horas laboradas
        let vHoursLab = {
          'Horas Diurnas': hoursDay * daytimeHours,
          'Horas Nocturnas': hoursNight * nightHours,
          'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
          'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
          'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
          'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
          'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
          'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
        };
        let hoursLaborales = {
          id,
          hoursLaborable,
          vHoursLab
        };
        let horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
        if (horasLaboradas === null) {
          let horasLaboradas = [hoursLaborales];
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        } else {
          horasLaboradas.push(hoursLaborales);
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        }
        this.validatecontinuar2();
      } else {
        alert('The employee is not registered');
        this.validatecontinuar2();
      }
    }
  }
  nomina2() {
    if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
      alert('You have not set up your system, have no registered employees, or have no recorded hours');
      this.validate2();
    } else {
      var auxTransport = JSON.parse(localStorage.getItem('config'));
      var salary = 0;
      var salaryRetention = 0;
      var percentageRetention = 0;
      var mSalary = 0;
      auxTransport.forEach((e) => {
        for (let i in e) {
          switch (i) {
            case 'salary':
              salary = e[i];
              break;
            case 'mRetention':
              salaryRetention = e[i];
              break;
            case 'percentageR':
              percentageRetention = e[i];
              break;
            case 'aux':
              auxTransport = e[i];
              break;
            case 'mSalary':
              mSalary = e[i];
              break;
          }
        }
      });
      var array = [];
      let empleados = JSON.parse(localStorage.getItem('empleados'));
      let ant = 0;
      for (let i = 0; i <= empleados.length - 1; i++) {
        if (empleados[i + 1] !== undefined) {

          if (empleados[i].cedula > empleados[i + 1].cedula) {
            ant = empleados[i];
            empleados[i] = empleados[i + 1];
            empleados[i + 1] = ant;
          }
        }
      }
      var nominas = [];
      console.log(` -- Identification card -- Position -- Total to pay --`);
      empleados.forEach((e) => {
        let hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
        hoursLaborables.forEach((j) => {
          if (j.id == e.cedula) {
            for (let hours in j.vHoursLab) {
              array.push(j.vHoursLab[hours]);
            }
            var total = 0;
            array = array.slice(-8);
            array.forEach((i) => {
              total += i;
            });
            if (total > (salary * salaryRetention)) {
              let subs = total * percentageRetention / 100;
              total -= subs;
            }
            if (total <= (salary * mSalary)) {
              total += auxTransport;
            }
            if (total <= (salary * 1)) {
              let alimentation = (salary * 20) / 100;
              total += alimentation;
            }
            total = parseInt(total);
            total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = total.split('').reverse().join('').replace(/^[\.]/, '');
            let cedula = e.cedula;
            let cargo = e.cargo;
            let tot = total;
            var nomina = {
              cedula,
              cargo,
              tot
            };
            let nomin = JSON.parse(localStorage.getItem('nomina'));
            if (nomin === null) {
              nominas = [nomina];
              localStorage.setItem('nomina', JSON.stringify(nominas));
            } else {
              nominas.push(nomina);
              localStorage.setItem('nomina', JSON.stringify(nominas));
            }
            console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
          }
        });
      });
    }
  }
  pago2() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    var config = JSON.parse(localStorage.getItem('config'));
    if (this.empleados === null) {
      alert('No registered employees');
      this.validatecontinuar2();
    } else {
      let find = parseInt(prompt('Enter ID for proof of payment?'));
      var tmp = 0;
      var name = '';
      var cargo = '';
      var paguis = 0;
      this.empleados.forEach((e) => {
        if (e.cedula == find) {
          tmp++;
          name = e.nombre;
          cargo = e.cargo;
          let pague = JSON.parse(localStorage.getItem('nomina'));
          pague.forEach((j) => {
            if (e.cedula == j.cedula) {
              paguis = j.tot;
            }
          });
        }
      });
      if (tmp === 0) {
        alert('The employee is not registered in the database');
        this.validatecontinuar2();
      } else {
        console.log(`**********************************************`);
        console.log(`**********************************************`);
        console.log(`**          ${name} || ${cargo}              **`);
        console.log(`**          Received from:  ${config[0].name}                 **`);
        console.log(`**  I received a total sum of:  ${paguis}    **`);
        console.log(`**********************************************`);
        console.log(`**********************************************`);
      }
    }
  }
  validatecontinuar2() {
    let option = this.continuar2();
    switch (option) {
      case 1:
        this.validateGestion2();
        break;
      case 2:
        this.hoursLab2();
        break;
      case 3:
        this.nomina2();
        break;
      case 4:
        this.pago2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validatecontinuar2();
        break;
    }
  }
  validate2() {
    let option = this.config2();
    switch (option) {
      case 1:
        let opt = this.idioma2();
        switch (opt) {
          case 1:
            this.validate();
            break;
          case 2:
            this.validate2();
            break;
          case 3:
            alert('Bay');
            break;
          default:
            this.validate2();
            break;
        }
        break;
      case 2:
        this.validateconfiguration2();
        break;
      case 3:
        this.validatecontinuar2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validate2();
        break;
    }
  }
}

let Project = new All();
Project.validate();