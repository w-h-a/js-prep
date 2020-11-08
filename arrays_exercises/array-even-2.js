// log all the evens

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// filter solution

let arrayOfEvens = [];

for (i = 0; i < myArray.length; i += 1) {
  let filterOfMyArray = myArray[i].filter(element => {
    return (element % 2) === 0;
  })
  arrayOfEvens = arrayOfEvens.concat(filterOfMyArray);
}

console.log(arrayOfEvens);

// reduction solution

let anotherArrayOfEvens = [];

for (i = 0; i < myArray.length; i += 1) {
  let reductionOfMyArray = myArray[i].reduce((accumulator, element) => {
    if ((element % 2) === 0) {
      return accumulator.concat(element);
    } else {
      return accumulator;
    }
  }, []);
  anotherArrayOfEvens = anotherArrayOfEvens.concat(reductionOfMyArray);
}

console.log(anotherArrayOfEvens);

// forEach solution (Book's solution)

myArray.forEach(element => {
  element.forEach(elementOfElement => {
    if ((elementOfElement % 2) === 0) {
      console.log(elementOfElement);
    }
  })
})
