let person = {
  name: 'Bob',
  age: '30 yrs',
  height: '6 ft'
};

let personKeys = Object.keys(person); // returns ['name', 'age', 'height']

personKeys.forEach(property => console.log(person[property]));
// Bob
// 30
// 6 ft

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2['c'] = 3;
obj2['d'] = 4;

let obj2Keys = Object.keys(obj2); // returns ['c', 'd']

obj2Keys.forEach(element => console.log(obj2[element]));
// 3
// 4
