/*
** Without using a for, while, or do/while loop,
** write some code that checks whether the number 3
** appears inside these arrays:
*/

function findTheNumber(arrayParam, numSearchParam) {
  return arrayParam.includes(numSearchParam);
}

function getSearchArg(userInputParam) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(userInputParam));
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let userInput = getSearchArg("Enter the number you'd like to search for: ");

let result1 = findTheNumber(numbers1, userInput);
let result2 = findTheNumber(numbers2, userInput);
let result3 = findTheNumber(numbers3, userInput);

console.log(`It is ${result1} that ${userInput} is in the numbers1 array.`);
console.log(`It is ${result2} that ${userInput} is in the numbers2 array.`);
console.log(`It is ${result3} that ${userInput} is in the numbers3 array.`);
