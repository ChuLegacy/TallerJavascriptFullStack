let salary = parseInt(prompt('Basic salary?')),
        salaryuser = parseInt(prompt('Enter your salary?')),
        help,
        retention;
do {
  let days = parseInt(prompt('How many days have you worked?'));
} while (days > 30);

if (salaryuser <= (salary * 2)) {
  help = parseInt(prompt('How much is the value of transportation assistance?'));
  salaryuser += help;
} else if (salaryuser >= (salary * 4)) {
  retention = parseInt(prompt('How much is the withholding tax percentage?'));
  salaryuser -= (retention * salaryuser) / 100;
}
let salaryHours = (salaryuser / 30) * days;
console.log(`Mr. Worker, this is your payment for the month. ${salaryHours}`);