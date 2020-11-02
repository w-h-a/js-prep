// My solution:

function multiply(a, b) {
  return a * b;
}
function getNumber(textNumber) {
  let rlSync = require('readline-sync');
  return rlSync.question(textNumber);
}

let number1 = getNumber("Enter a number: ");
number1 = Number(number1);
let number2 = getNumber("Enter another number: ");
number2 = Number(number2);
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);


/* The book's solution:
**
**function multiply(left, right) {
**  return left * right;
**}
**
**function getNumber(prompt) {
**  let readlineSync = require('readline-sync');
**  return parseFloat(readlineSync.question(prompt));
**}
**
**let left = getNumber('Enter the first number: ');
**let right = getNumber('Enter the second number: ');
**console.log(`${left} * ${right} = ${multiply(left, right)}`);
**
*/
