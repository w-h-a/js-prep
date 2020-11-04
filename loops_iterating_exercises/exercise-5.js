/*
** The following code uses the randomNumberBetween function to
** generate a number between its first and second arguments.
** It uses a while loop to try to generate a number greater than 2.
** Edit the code so that you don't need to call the randomNumberBetween
** function from two different locations.
** Do not change the arguments you pass to randomNumberBetween.
*/


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
