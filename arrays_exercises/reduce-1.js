let arrayExample = [2, 3, 5, 7];
let addThem = arrayExample.reduce((accumulator, element) => accumulator + element, 0);
let timesThem = arrayExample.reduce((accumulator, element) => accumulator * element, 1);
console.log(addThem, timesThem);
