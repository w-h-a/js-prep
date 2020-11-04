/*
**let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
**let upperNames = [];
**let index = 0;
**
**while (index < names.length) {
**  let upperCaseName = names[index].toUpperCase();
**  upperNames.push(upperCaseName);
**  index += 1;
**}
**
**console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
*/

// Why use a while loop when you can use a for loop!?

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (!!(names[index] !== 'Naveed')) { // Just messing around with negation here.
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
