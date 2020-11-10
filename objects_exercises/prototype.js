let bob = { name: 'Bob', age: 'twenty-two years old' };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob);
console.log(studentBob.name); 
