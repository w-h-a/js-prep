// with function expression:

let arrayOne = [1, 2, 3];
arrayOne.forEach(function (num) {
  console.log(num);
});
// returns undefined

// with arrow function:

let arrayTwo = [1, 2, 3];
arrayTwo.forEach(num => console.log(num));
