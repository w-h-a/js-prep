let arr = [];
arr.length = 3;
console.log(arr); // strange output: [ <3 empty items>]

console.log(arr[0]); // strange output: undefined

let tryThis = arr.filter(element => element === undefined);
console.log(tryThis); // strange output: []

arr.forEach(element => console.log(element)); // strange return: undefined
console.log(arr.forEach(element => console.log(element))); // strange output: undefined

arr[1] = 3;
console.log(arr);
arr.forEach(element => console.log(element)); // strange output: [3]
