/*
**Write a function that searches an array of strings
**for every element that matches the regular expression given by its argument.
**The function should return all matching elements in an array.
*/

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

// My solution:

function allMatches(arrayOfWordsParam, regExParam) {
  let reducedArray = arrayOfWordsParam.reduce((acc, ele) => {
    if (regExParam.test(ele)) {
      return acc.concat(ele);
    } else {
      return acc;
    }
  }, []);
  return reducedArray;
}
