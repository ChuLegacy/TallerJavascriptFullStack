let salary = parseInt(prompt('What is your salary'));
let retention = parseInt(prompt('What is your percentaje of retention'));
alert(`They are held:, ${salary * retention / 100}`);
alert(`The total salary of the worker is: ${salary - (salary * retention / 100)}`);