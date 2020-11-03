function evenOrOdd(number) {
  let isTheInputAnInteger = Number.isInteger(number);

  switch (isTheInputAnInteger) {
    case true:
      return ((number % 2) === 0) ? "Your number is even." : "Your number is odd.";
      break;
    default:
      return "ERROR: The number must be an integer."
      break;
  }
}

function getInput(input) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(input));
}

let numFromUser = getInput("Enter a number to determine if it is even or odd: ");
let result = evenOrOdd(numFromUser);
console.log(result);
