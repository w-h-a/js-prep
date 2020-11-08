let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even',
//    'odd', 'even', 'even',
//    'even', 'odd', 'odd',
//    'even', 'even',
//  ]

let desiredResult = [
  'odd', 'odd', 'even',
  'odd', 'even', 'even',
  'even', 'odd', 'odd',
  'even', 'even'
];

let mapOfMyArray = myArray.map(element => {
  if ((element % 2) === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log('Here is myArray:\n', myArray);
console.log('Here is the desired result:\n', desiredResult);
console.log('Here is the mapOfMyArray:\n', mapOfMyArray);
