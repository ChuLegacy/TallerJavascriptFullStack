//real months, days, hours, minutes, seconds
//inicio
//	months <- 12*15
//	days <- 365*15
//	hours <- 8760*15
//	minutes <- 525600*15
//	seconds <- 31536000*15
//		escriba "There are ", months ," months in 15 years "
//		llamar nueva_linea
//		escriba "There are ", days ," days in 15 years "
//		llamar nueva_linea
//		escriba "There are ", hours , " hours in 15 years "
//		llamar nueva_linea
//		escriba "There are ", minutes , " minute in 15 years "
//		llamar nueva_linea
//		escriba "There are ", Seconds , " seconds in 15 years "
//		llamar nueva_linea
//fin

let months = 12 * 15;
let days = 365 * 15;
let hours = 8760 * 15;
let minutes = 525600 * 15;
let seconds = 31536000 * 15;

alert(`There are ${months}, months in 15 years
      There are ${days}, days in 15 years
      There are ${hours}, hours in 15 years
      There are ${minutes}, minute in 15 years
      There are ${seconds}, seconds in 15 years
`);