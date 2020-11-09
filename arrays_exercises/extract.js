/*
** Asks user what type within
** an arbitrary array they want to search for, and
** what instance of the type they want to search for.
** Then it flattens the array and returns the index
** of the instance (provided it is in the array),
** otherwise, a "not found" message is returned.
** The final result is logged.
*/

function search(inputArrayParam, inputSearchParam) {

  let flattenedArray = inputArrayParam.flat(Infinity);

  if (flattenedArray.includes(inputSearchParam)) {
    let result = flattenedArray.indexOf(inputSearchParam);
    console.log(`${inputSearchParam} is at index ${result} in the following flattened-version of the array:`);
    console.log(flattenedArray);
  } else {
    console.log(`${inputSearchParam} was not found.`);
  }

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
      let userBool;
      switch (booleanInput) {
        case 'true':
          userBool = true;
          return userBool;
          break;
        case 'false':
          userBool = false;
          return userBool;
          break;
        default:
          return undefined;
          break;
      }
    case 'null':
      return null;
      break;
    default:
      return undefined;
      break;
  }
}

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];


let userInput = getParam("Would you like to search for a string, number, boolean, null, or undefined?\n");
let finalResult = search(arr, userInput);
