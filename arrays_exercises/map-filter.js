/*
Use the map method and filter method to determine the lengths
of all the elements in the array of string values and
then discard the even values and keep the odd values.
*/

function oddLengths(arrayParam) {
  let mapOfArray = arrayParam.map(element => element.length);
  let filterOfMap = mapOfArray.filter(element => (element % 2) !== 0);
  return filterOfMap;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Book's Solution

function anotherOddLengths(arrayParam) {
  let filteredNumbersArray = arrayParam.map(letters => {
    return letters.length;
  }).filter(number => {
    return (number % 2) === 1;
  });
  return filteredNumbersArray;
}

console.log(anotherOddLengths(arr)); // => [1, 5, 3]
