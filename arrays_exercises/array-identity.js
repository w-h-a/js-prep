let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b);

let c = a;
console.log(a === c);

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true
}

let d = [4, 5, 6];
let e = [1, 2, 3, 4];

console.log(arraysEqual(a, b)); // logs true
console.log(arraysEqual(c, d)); // logs false
console.log(arraysEqual(c, e)); // logs false

a.push(4);

console.log(arraysEqual(c, a)); // logs true

let f = [3, 4];
let g = [3, 4];
let h = f;
let k = [1, 2, f, 5];
let l = [1, 2, g, 5];
let m = [1, 2, h, 5];

console.log(arraysEqual(k, l)); // logs false
console.log(arraysEqual(k, m)); // logs true
