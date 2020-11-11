/*
Number.isNaN(value) returns true if and only if value is NaN, false otherwise.
You can also use Object.is(value, NaN) to make the same determination.
Without using either of those methods,
write a function named isNotANumber that returns true
if the value passed to it as an argument is NaN, false if it is not.
*/

function isNotANumber(inputParam) {
  return inputParam !== inputParam;
}

let test = isNotANumber(NaN);
console.log(test);

console.log(Number.isNaN(NaN));
