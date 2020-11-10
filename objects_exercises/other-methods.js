let person = { name: 'Bob', age: '30yrs', height: '6ft' };

let personProperties = Object.values(person);

console.log(personProperties); // logs [ 'Bob', 30, '6ft' ]

/*
**Note that this:
**personProperties.forEach(element => console.log(person[element]));
**logs undefined 3 times because to access a dictionary
**object's properties, you refer to them by their keys rather than
**the value itself. Because the person object has no Bob key,
**no 30yrs key, and no 6ft key, the code logs undefined. Of course,
**the following still works:
*/

personProperties.forEach(element => console.log(element));

let personEntries = Object.entries(person);

console.log(personEntries);
// logs [[ 'name', 'Bob' ], [ 'age', 30yrs ], [ 'height', '6ft' ]]

personEntries.forEach(element => console.log(element));

let objA = {a: 'foo'}

console.log("objA goes from:", objA);

let objB = {b: 'bar'}

console.log("objB goes from:", objB);

let objAAssign = Object.assign(objA, objB);

console.log("here's objAAssign:", objAAssign);
console.log("objA goes to:", objA);
console.log("objcB goes to:", objB);

objA = {a: 'foo'}

console.log("we've reset objA to:", objA);

let objC = Object.assign({}, objA, objB);

console.log("here's objC:", objC);
console.log("objA goes to:", objA);
console.log("objB goes to:", objB);
