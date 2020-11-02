// Run this code in your browser

function getName(text) {
  return prompt(text);
}

let firstName = getName("Enter your first name: ");
let lastName = getName("Enter your last name: ");
console.log(firstName + " " + lastName);
