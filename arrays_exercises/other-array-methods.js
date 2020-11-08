let a = [1, 2, 3, 4, 5];
console.log(a.includes(2));
console.log(a.includes(10));

let b = [1, 2, 3, 4, 5];
let c = a;
let d = [1, 2, a, 5];
console.log(d.includes(b)); // logs false
console.log(d.includes(c)); // logs true

let e = [5, 3, 8, 2, 4, 1];
console.log(e.sort());
console.log(e);

let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];
let firstSliceOfFruits = fruits.slice(1, 3);
console.log(fruits, firstSliceOfFruits);

let secondSliceOfFruits = fruits.slice(2);
console.log(secondSliceOfFruits);

let fruitsClone = fruits.slice();
console.log(fruitsClone);

let numbers = [1, 2, 3, 4];
console.log(numbers.reverse());
console.log(numbers);

let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers);
console.log(numbers);
