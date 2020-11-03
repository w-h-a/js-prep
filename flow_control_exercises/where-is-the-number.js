/* Working toward an output like:
**numberRange(25);   // '25 is between 0 and 50'
**numberRange(75);   // '75 is between 51 and 100'
**numberRange(125);  // '125 is greater than 100'
**numberRange(-25);  // '-25 is less than 0'
*/

/* My original solution:
**function whereIsTheNumber(inputNum) {
**  if (inputNum >= 0 && inputNum <= 50) {
**    return `${inputNum} is between 0 and 50`;
**  } else if (inputNum >= 51 && inputNum <= 100) {
**    return `${inputNum} is between 51 and 100`;
**  } else if (inputNum > 100) {
**    return `${inputNum} is greater than 100`;
**  } else {
**    return `${inputNum} is less than 0`;
**  }
**}
*/

// The more elegant Launch solution:
function whereIsTheNumber(inputNum) {
  if (inputNum < 0) {
    return `${inputNum} is less than 0`;
  } else if (inputNum <= 50) {
    return `${inputNum} is between 0 and 50`;
  } else if (inputNum <= 100) {
    return `${inputNum} is between 51 and 100`;
  } else {
    return `${inputNum} is greater than 100`;
  }
}

function getNumber(userNum) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(userNum));
}

let userInput = getNumber("Enter a number to find out where it is:\n");
let numLocation = whereIsTheNumber(userInput);
console.log(numLocation);
