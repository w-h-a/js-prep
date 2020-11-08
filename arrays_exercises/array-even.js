// log all the evens

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

// reduction solution

let reductionOfMyArray = myArray.reduce((accumulator, element) => {
  if ((element % 2) === 0) {
    return accumulator.concat(element);
  } else {
  return accumulator;
  }
}, []);

console.log(reductionOfMyArray);

// filter solution

let filteredArray = myArray.filter(element => {
  return (element % 2) === 0;
});

console.log(filteredArray);

// forEach solution (Book's solution)

myArray.forEach(element => {
  if ((element % 2) === 0) {
    console.log(element);
  }
})
