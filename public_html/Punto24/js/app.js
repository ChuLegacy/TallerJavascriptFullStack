let hours = parseInt(prompt('Enter a number of hours')),
        week = 168,
        day = 24;
console.log(`There are ${(hours / day).toFixed(2)} days in ${hours} hours
There are ${(hours / week).toFixed(2)} weeks in ${hours} hours`);
