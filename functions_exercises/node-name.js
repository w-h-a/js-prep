function getName(text) {
  let rlSync = require('readline-sync');
  return rlSync.question(text);
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
