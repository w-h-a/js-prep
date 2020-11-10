let person = {
  name: 'Bob',
  age: '30 yrs',
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}

// Bob
// 30 yrs
// 6 ft

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2['c'] = 3;
obj2['d'] = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

// 3
// 4
// 1
// 2

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

// 3
// 4
