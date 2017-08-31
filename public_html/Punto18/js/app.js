let salary = parseInt(prompt('What is your salary')),
        retention = parseInt(prompt('What is your percentaje of retention'));
console.log(`They are held:, ${salary * retention / 100}
The total salary of the worker is: ${salary - (salary * retention / 100)}`);