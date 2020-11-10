/*
**Use object literal syntax to create an object that
**behaves as an array in a for statement.
**The object should contain at least 3 elements.
**You should place your code between the braces in the let statement:


let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

*/

// My solution:

let myArray = {
  '0': 'hello',
  '1': 1,
  '2': [2, 'worlds'],
  length: 3,
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
