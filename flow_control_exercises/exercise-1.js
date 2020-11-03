// Answers are in comments

console.log(false || (true && false)); // false

console.log(true || (1 + 2)); // true // outputs last thing evaluated before short-circuiting if it does short-circuit
console.log((1 + 2) || true); // 3 // outputs last thing evaluated before short-circuiting if it does short-circuit
console.log(true && (1 + 2)); // 3 // outputs las thing evaluated
console.log(false && (1 + 2)); // false // outputs last thing
console.log((1 + 2) && true); // true // outputs last thing

console.log((32 * 4) >= 129); // false // 128 is not >= 129

console.log(false !== !true); // false // false is not non-identical to false; so, whole thing is false

console.log(true === 4); // false // no coercion; so, whole thing is false
console.log(false === (847 === '847')); // true // no coercion; so, whole thing is true
console.log(false === (847 == '847')); // false // coercion to true; so, whole thing is false

console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); // true
/////////////false/OR////////////false//////////////////true
///////////////////false//////////////////OR////////////true
//////////////////////////////////////////true///////////////////OR//false
/////////////////////////////////////////////////////////////////true
