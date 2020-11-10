let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

// dot notation
console.log(person.name);

// bracket notation
console.log(person['age']);

person.height = '6 ft';
person.gender = 'female';

console.log(person);

delete person.age;
delete person.gender;
delete person['hobbies'];

console.log(person)

const MyObj = {foo: "bar", qux: "xyz"}

console.log(MyObj);

MyObj.qux = "hey there"

console.log(MyObj);

// MyObj = {} // Remove "//" to get: Uncaught TypeError: Assignment to constant variable.

const MySecondObj = Object.freeze({foo: "bar", qux: "xyz"})

console.log(MySecondObj);

MyObj.qux = "hey there";

console.log(MySecondObj);
