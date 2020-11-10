// immutable primitive objects (tokens of primitive types)
const twenty = 20;
console.log("twenty is:", twenty);
const twentyOne = twenty + 1;
console.log("twenty is still:", twenty);

const twe = 'twe';
console.log("twe is:", twe);
const tweNty = twe + "Nty";
console.log("twe is still:", twe);

// mutable complex objects (tokens of complex types)
const dictionary = {one: 1, two: 2, twenty: 20, twe: 'twe'}
console.log("The dictionary is:", dictionary);
dictionary.twentyOne = dictionary.twenty + 1;
dictionary.tweNty = dictionary.twe + "Nty";
console.log("the dictionary is now:", dictionary);
