/*
**Create an array from the keys of the object obj below,
**with all of the keys converted to uppercase.
**Your implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// My solution:

let arr = Object.keys(obj);

let upperArr = arr.reduce((acc, ele) => {
  return acc.concat(ele.toUpperCase());
}, []);

console.log(upperArr);
console.log(obj);
