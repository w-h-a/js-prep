function getNumber(a) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(a));
}

let inputNumber = getNumber("Enter a number: ");

let x;

if (x = inputNumber) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
