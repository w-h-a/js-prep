let strings = ['a','b','c','d'];

// with function expression

let upperString = strings.reduce(function (accumulator, element) {
  return accumulator + element.toUpperCase();
}, '');

console.log(upperString);

// with arrow function

let stringUpper = strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase();
}, '');

console.log(stringUpper);
