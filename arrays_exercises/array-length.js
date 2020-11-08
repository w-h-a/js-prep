let array1 = [1, 2, undefined, 4];
console.log(array1.length); // outputs 4

let array2 = [1];
array2.length = 5;
console.log(array2.length); // outputs 5

let array3 = [];
array3[-1] = [1];
console.log(array3.length); // outputs 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4.length); // outputs 3

let array5 = [];
array5[100] = 3;
console.log(array5.length); // outputs 101 (I initially put 1)
