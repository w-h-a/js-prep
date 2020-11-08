// My first solution

function oddLengths(arrayParam) {
  let firstReduction = arrayParam.reduce((accumulator, element) => {
    return accumulator.concat(element.length);
  }, []);
  let secondReduction = firstReduction.reduce((accumulator, element) => {
    if ((element % 2) !== 0) {
      return accumulator.concat(element);
    } else {
      return accumulator;
    }
  }, []);
  return secondReduction;
}

// My second solution (after looking at the Book's solution)

function anotherOddLengths(arrayParam) {
  let reduction = arrayParam.reduce((accumulator, element) => {
    let length = element.length;
    if ((length % 2) !== 0) {
      return accumulator.concat(length);
    } else {
      return accumulator;
    }
  }, []);
  return reduction;
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
console.log(anotherOddLengths(arr)); // => [1, 5, 3]
