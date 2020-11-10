/*
**Create a function that creates and returns a copy of an object.
**The function takes two arguments:
**the object to copy and an array of the keys that you want to copy.
**The function body should be such that it is permissible to
**omit the array of keys argument when calling the function. In that
**case, the function should copy all the keys of the object.
*/

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj['foo']);    // => 1
console.log(newObj['bar']);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2['foo']);   // => 1
console.log(newObj2['bar']);   // => undefined

let newObj3 = anotherCopyObj(objToCopy);
console.log(newObj3['foo']);    // => 1
console.log(newObj3['bar']);    // => 2

let newObj4 = anotherCopyObj(objToCopy, [ 'foo' ]);
console.log(newObj4['foo']);   // => 1
console.log(newObj4['bar']);   // => undefined


// My solution:

function copyObj(objParam, arrOfKeysParam) {
  if (arrOfKeysParam === undefined) {

    return Object.create(objParam);

  } else {

    let dummyObject = Object.assign({}, objParam);

    let dummyObjectKeys = Object.keys(dummyObject);

    keysToBeDeleted = dummyObjectKeys.reduce((acc, ele) => {
      if (!arrOfKeysParam.includes(ele)) {
        return acc.concat(ele);
      } else {
        return acc;
      }
    }, []);

    dummyObjectKeys.forEach(element => {
      if (keysToBeDeleted.includes(element)) delete dummyObject[element];
    })

    return Object.create(dummyObject);

  }
}

// Book's more elegant solution:

function anotherCopyObj(sourceObject, keys) {
  let outputObject = {};

  if (keys) {
    keys.forEach(element => {
      outputObject[element] = sourceObject[element];
    })

  return outputObject;

  } else {

    return Object.assign(outputObject, sourceObject);

  }
}
