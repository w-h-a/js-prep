/*
** My original solution, which follows the instructions of the book.
** We were required to use a for loop even though recursion (see below)
** would appear to be the best approach.
**
**function factorial(integer) {
**  if (integer === 0) {
**    return 1;
**  } else {
**    let runningProduct = integer;
**    for (i = integer - 1; i > 0; i -= 1) {
**      runningProduct *= i;
**    }
**    return runningProduct;
**  }
**}
*/

/*
** The book's more elegant solution:
**
**function factorial(number) {
**  let result = 1;
**  for (let counter = number; counter > 0; counter -= 1) {
**    result *= counter;
**  }
**  return result;
**}
*/

/*
** My favored (recursion) solution (this also turns out to be the
** solution to exercise 6 in the chapter on loops and iteration):
*/

function factorial(integer) {
  if (integer < 2) return 1;
  return integer * factorial(integer - 1);
}

/*
** while loop solution for giggles:
**
**function factorial(integer) {
**  let result = 1;
**  let counter = integer;
**  while (counter > 0) {
**    result *= counter;
**    counter -= 1;
**  }
**  return result;
**}
*/

function getInteger(input) {
  let rlSync = require('readline-Sync');
  return parseInt(rlSync.question(input));
}

let userInput = getInteger("Enter a number n to find n!: ");
let result = factorial(userInput);
console.log(result);
