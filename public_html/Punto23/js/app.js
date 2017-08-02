let f1 = new Date(prompt('Enter the first date (YY/MM/DD)'));
let f2 = new Date(prompt('Enter the second date (YY/MM/DD)'));
if (f1 > f2) {
  console.log(`There : ${Math.round(((((f1 - f2) / 1000) / 60) / 60) / 24)} days beetwen your two date`);
  console.log(`There : ${Math.floor((((((f1 - f2) / 1000) / 60) / 60) / 24) / 30)} months beetwen your two date`);
  console.log(`There : ${Math.round((((((f1 - f2) / 1000) / 60) / 60) / 24) / 365)} years beetwen your two date`);



} else {
  console.log(`There : ${Math.round(((((f2 - f1) / 1000) / 60) / 60) / 24)} days beetwen your two date`);
  console.log(`There : ${Math.floor((((((f2 - f1) / 1000) / 60) / 60) / 24) / 30)} months beetwen your two date`);
  console.log(`There : ${Math.round((((((f2 - f1) / 1000) / 60) / 60) / 24) / 365)} years beetwen your two date`);
}