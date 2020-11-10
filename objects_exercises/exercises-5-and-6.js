// Q5: Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

// My solution:

let myObj = Object.create(myProtoObj);

/*
**Q6: Add a qux property with value 3 to the myObj Object we created
**in the previous exercise.
*/

// My solution:

myObj['qux'] = 3;

// Now, examine the following code snippets:

let objKeys = Object.keys(myObj)
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*
**Without running this code, can you determine whether these
**two snippets produce the same output? Why?
*/
