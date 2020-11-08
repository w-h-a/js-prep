// map and filter

let mapArray = [1, 2, 3];
let reductionOfMap = mapArray.reduce((accumulator, element) => {
  return accumulator.concat(element * element);
}, []);

console.log(reductionOfMap);

let filterArray = [1, 2, 3];
let reductionOfFilter = filterArray.reduce((accumulator, element) => {
  if (element >= 2) {
    return accumulator.concat(element);
  } else {
    return accumulator;
  }
}, []);

console.log(reductionOfFilter);
