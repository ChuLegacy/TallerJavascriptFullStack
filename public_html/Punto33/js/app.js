class Menu {
  options() {
    this.option = parseInt(prompt(`Select an option to enter your data.
1. Personal information
2. Family reference
3. Work reference
4. Professional Profile Description
5. Print resume
0. Exiting the program`));
    return this.option;
  }
}
class Persona extends Menu {
  constructor() {
    super();
  }
  set personalInformation(personalInfor) {
    this._personalInformation = personalInfor;
  }
  get personalInformation() {
    return this._personalInformation;
  }
  set familiReference(familiRefe) {
    this._familiReference = familiRefe;
  }
  get familiReference() {
    return this._familiReference;
  }
  set workReference(workRefe) {
    this._workReference = workRefe;
  }
  get workReference() {
    return this._workReference;
  }
  set professionalProfileDescription(profile) {
    this._professionalProfileDescription = profile;
  }
  get professionalProfileDescription() {
    return this._professionalProfileDescription;
  }
  set printResume(print) {
    this._printResume = print;
  }
  get printResume() {
    return this._printResume;
  }
  validate() {
    let option = this.options();
    switch (option) {
      case 1:
        this.personalData();
        this.validate();
      break;
      case 2:
        this.familyBenchmark();
        this.validate();
      break;
      case 3:
        this.jobReference();
        this.validate();
      break;
      case 4:
        this.description();
        this.validate();
      break;
      case 5:
        this.printAll();
        this.validate();
      break;
      case 0:
        alert('Bay');
        break;
      default:
        alert('Select the correct option');
        this.validate();
        break;
    }
  }
  personalData() {
    let name = prompt("What's your name?");
    let lastName = prompt("What's your lastName?");
    let city = prompt("What's your city?");
    let nationality = prompt("What is your nationality");
    let data = { name, lastName, city, nationality };
    this._personalInformation = data;
  }
  familyBenchmark() {
    let name = prompt("What's your name?");
    let mobile = prompt("What's your mobile?");
    let occupation = prompt("What's your occupation?");
    let data = { name, mobile, occupation };
    this._familiReference = data;
  }
  jobReference() {
    let name = prompt("What's your name?");
    let mobile = prompt("What's your mobile?");
    let occupation = prompt("What's your occupation?");
    let data = { name, mobile, occupation };
    this._workReference = data;
  }
  description(){
    let desc = prompt(`Write a professional profile description`);
    let data = { desc };
    this._professionalProfileDescription = data;
}
  printAll() {
    let data = [];
    if (this._personalInformation) {
      let dataInfo = `Personal Information
`;
      for (let data in this._personalInformation) {
        dataInfo += `${this._personalInformation[data]}
`;
      }
      data.push(dataInfo);
    }
    if (this._familiReference) {
      let dataInfo = `Family reference
`;
      for (let data in this._familiReference) {
        dataInfo += `${this._familiReference[data]}
`;
      }
      data.push(dataInfo);
    }
    if (this._workReference) {
      let dataInfo = `Labor reference
`;
      for (let data in this._workReference) {
        dataInfo += `${this._workReference[data]}
`;
      }
      data.push(dataInfo);
    }
    if (this._professionalProfileDescription) {
      let dataInfo = `Description of professional profile
`;
      for (let data in this._professionalProfileDescription) {
        dataInfo += `${this._professionalProfileDescription[data]}
`;
      }
      data.push(dataInfo);
    }
    this._printResume = data;
    let dataInfo = '';
    for (let data of this._printResume) {
      dataInfo += `${data} `;
    }
    console.log(dataInfo);
  }
}
let personas = new Persona();
personas.validate();