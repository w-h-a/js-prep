console.log(0 === -0);
console.log(String(-0));

let negZero = -0;
console.log(Object.is(negZero, 0));
console.log(Object.is(negZero, -0));

/*
**Without using Object.is,
**write a function that will return true
**if the argument is -0, and false
**if it is 0 or any other number.
*/

function isNegZero(inputNumberParam) {
  return 1/inputNumberParam === -Infinity;

}

console.log(isNegZero(negZero));
console.log(isNegZero(0));
