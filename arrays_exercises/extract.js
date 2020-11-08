function search(inputArrayParam, inputSearchParam) {
  if (inputSearchParam === undefined) return "I am error."
  for (let i = 0; i < inputArrayParam.length; i += 1) {
    if (Array.isArray(inputArrayParam[i])) {
      if (inputArrayParam[i].includes(inputSearchParam)) {
        let j = inputArrayParam[i].indexOf(inputSearchParam);
        return `${inputSearchParam} is at index ${i} and ${j}.`;
      } else {
        continue;
      }
    } else if (inputArrayParam[i] === inputSearchParam) {
      return `${inputSearchParam} is at index ${i}.`;
    } else {
      continue;
    }
  }
  return `${inputSearchParam} was not found.`
}

function getSearchParam(userParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(userParam)
}

function getParam(typeParam) {
  let rlSync = require('readline-sync');
  let result = rlSync.question(typeParam);

  switch(result) {
    case 'string':
      let stringInput = getSearchParam("Enter string: ");
      return stringInput;
      break;
    case 'number':
      let numberInput = getSearchParam("Enter number: ");
      return Number(numberInput);
      break;
    case 'boolean':
      let booleanInput = getSearchParam("Enter boolean: ");
      return Boolean(booleanInput);
      break;
    case 'null':
      return null;
      break;
    default:
      console.log("Try again!")
      break;
  }
}

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

let userInput = getParam("Would you like to search for a string, number, boolean, or null?\n");

let finalResult = search(arr, userInput);

console.log(finalResult);
