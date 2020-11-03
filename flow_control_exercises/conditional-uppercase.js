function upperCaseAction(stringOfCharacters) {
  return (stringOfCharacters.length > 10) ? stringOfCharacters.toUpperCase() : stringOfCharacters;
}

function getText(textInput) {
  readlineSync = require('readline-sync');
  return readlineSync.question(textInput);
}

let inputFromUser = getText("Enter text of length greater than 10 for uppercase action: ");
let result = upperCaseAction(inputFromUser);
console.log(result)
