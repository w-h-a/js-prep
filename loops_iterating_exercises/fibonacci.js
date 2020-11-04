function fibonacci(place) {
  if (place === 0) {
    return 0;
  } else if (place === 1) {
    return 1;
  } else {
    return fibonacci(place - 1) + fibonacci(place - 2);
  }
}

function getInteger(input) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(input));
}

let userInput = getInteger("Enter an integer n to find the nth fibonacci number: ");
let fibonacciNumber = fibonacci(userInput);
console.log(`The ${userInput}th fibonacci number is ${fibonacciNumber}`);
