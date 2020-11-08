// My first solution

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray = array.filter(element => Number.isInteger(element));

console.log(newArray); // => [1, 3, -4]

// My second solution

let mySecondArray = array.filter(Number.isInteger);

console.log(mySecondArray); // => [1, 3, -4]

// Book's first solution

function grabIntegers(arrayParam) {
  return arrayParam.filter(element => Number.isInteger(element));
}

let booksFirstArray = grabIntegers(array);

console.log(booksFirstArray); // => [1, 3, -4]


// Book's second solution

function removeNonIntegers(arrayParam) {
  return arrayParam.filter(Number.isInteger);
}

let booksSecondArray = removeNonIntegers(array);

console.log(booksSecondArray); // => [1, 3, -4]
