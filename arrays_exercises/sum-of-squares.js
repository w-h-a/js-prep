function sumOfSquares(arrayOfNumbersParam) {
  let reductionOfArrayOfNumbers = arrayOfNumbersParam.reduce((accumulator, element) => {
    return accumulator + element * element;
  }, 0);
  return reductionOfArrayOfNumbers;
}

function getNumbers(userInputParam) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(userInputParam));
}

function getAnswer(userInputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(userInputParam);
}

let numbers = [];

do {
  let userInput = getNumbers("Enter a number: ");
  numbers.push(userInput);
} while (getAnswer("Enter 'y' if you want to enter another number: ") === 'y');

let result = sumOfSquares(numbers);
console.log(result);

// let numbers = [3, 5, 7];
//console.log(sumOfSquares(numbers)); // => 83
