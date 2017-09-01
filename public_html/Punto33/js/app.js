class Menu {
  constructor() {
    this.option = parseInt(prompt(`Select an option to enter your data.
1. Personal information
2. Family reference
3. Labor reference
4. Description of professional profile
5. Print resume
0. Quit the program`));
  }
}

class Persona extends Menu {

}
//
//
//
////class Persona {
//  constructor() {
//    this.data_personal = {};
//    this.ref_family = {};
//    this.ref_lab = {};
//    this.profile = {};
//  }
//  menu() {
//    var option;
//    do {
//      option = parseInt(prompt(`Select an option to enter your data.
//1. Personal information
//2. Family reference
//3. Labor reference
//4. Description of professional profile
//5. Print resume
//0. Quit the program`));
//      switch (option) {
//        case 1:
//          this.personal();
//          break;
//        case 2:
//          this.family();
//          break;
//        case 3:
//          this.laborables();
//          break;
//        case 4:
//          this.perf();
//          break;
//        case 5:
//          this.prints();
//          break;
//        case 0:
//          alert('Bay');
//          break;
//      }
//    } while (option !== 0);
//  }
//  personal() {
//    let name = prompt('What\'s your name?');
//    let last = prompt('What is your last name?');
//    let nationality = prompt('What is your nationality?');
//    let city = prompt('What is your city');
//    this.data_personal = {
//      name,
//      last,
//      nationality,
//      city
//    };
//    return this.data_personal;
//  }
//  family() {
//    let name = prompt("What's your name?");
//    let mobile = prompt('What is your mobile?');
//    let occupation = prompt('What is your occupation?');
//    this.ref_family = {
//      name,
//      mobile,
//      occupation
//    };
//    return this.ref_family;
//  }
//  laborables() {
//    let name = prompt("What's your name?");
//    let mobile = prompt('What is your mobile?');
//    let occupation = prompt('What is your occupation?');
//    this.ref_lab = {
//      name,
//      mobile,
//      occupation
//    };
//    return this.ref_lab;
//  }
//  perf() {
//    let description = prompt('Write a professional profile description');
//    this.profile = {
//      description
//    };
//    return this.profile;
//  }
//  prints() {
//    console.clear();
//    var info = '';
//    for (let person in this.data_personal) {
//      info += this.data_personal[person] + " ";
//    }
//    info !== '' ? console.log(`
//  		Personal Information
//  		${info}`) : '';
//
//    var inf = '';
//    for (let family in this.ref_family) {
//      inf += this.ref_family[family] + " ";
//    }
//    inf !== '' ? console.log(`
//  		Family reference
//  		${inf}`) : '';
//
//    var i = '';
//    for (let Labor in this.ref_lab) {
//      i += this.ref_lab[Labor] + " ";
//    }
//    i !== '' ? console.log(`
//  		Labor reference
//  		${i}`) : '';
//
//    var fo = '';
//    for (let description in this.profile) {
//      fo += this.profile[description] + " ";
//    }
//    fo !== '' ? console.log(`
//  		Description of professional profile
//  		${fo}`) : '';
//  }
//}
//
//let curriculum = new Persona();
//curriculum.menu();