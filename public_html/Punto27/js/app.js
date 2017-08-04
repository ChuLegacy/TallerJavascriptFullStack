function menu() {
  option = parseInt(prompt(`Select an option to enter your data.
1. Personal information
2. Family reference
3. Labor reference
4. Description of professional profile
5. Print resume
0. Quit the program`));
  return option;
}
/*
 * Personal Information
 */
var person = {
  name: '',
  last: '',
  nationality: '',
  city: ''
};
function personal() {
  person.name = prompt('What\'s your name?');
  person.last = prompt('What is your last name?');
  person.nationality = prompt('What is your nationality?');
  person.city = prompt('What is your city?');
  return validate();
}
/*
 * Family Reference
 */
var family = {
  name: '',
  occupation: '',
  mobile: ''
};
function familyR() {
  family.name = prompt('What\'s your name?');
  family.occupation = prompt('What is your occupation?');
  family.mobile = prompt('What is your mobile?');
  return validate();
}
/*
 * Labor Reference
 */
var labor = {
  name: '',
  occupation: '',
  mobile: ''
};
function laborR() {
  labor.name = prompt('What\'s your name?');
  labor.occupation = prompt('What is your occupation?');
  labor.mobile = prompt('What is your mobile?');
  return validate();
}
/*
 * Description
 */
var perfil;
function perfilR() {
  perfil = prompt('Occupational profile description?');
  return validate();
}
var flag = '';
function print() {
  for (let per in person) {
    if (person[per]) {
      flag += person[per] + " ";
    }
  }
  if (flag.length !== 0) {
    console.log('     Personal information');
    console.log('Name LastName Country City');
    console.log(flag);
    console.log('');
  }
  flag = '';
  for (let fam in family) {
    if (family[fam]) {
      flag += family[fam] + " ";
    }
  }
  if (flag.length !== 0) {
    console.log('     Family Reference');
    console.log('Name Occupation Mobile');
    console.log(flag);
    console.log('');
  }
  flag = '';
  for (let lab in labor) {
    if (labor[lab]) {
      flag += labor[lab] + " ";
    }
  }
  if (flag.length !== 0) {
    console.log('     Labor Reference');
    console.log('Name Occupation Mobile ');
    console.log(flag);
    console.log('');
  }
  if (perfil) {
    console.log('Description of professional profile');
    console.log(perfil);
  }
  return validate();
}
function validate() {
  let option = menu();
  switch (option) {
    case 1:
      personal();
      break;
    case 2:
      familyR();
      break;
    case 3:
      laborR();
      break;
    case 4:
      perfilR();
      break;
    case 5:
      print();
      break;
    case 0:
      alert('Bay Bay :/');
      break;
    default:
      validate();
      break;
  }
}
validate();