let rlSync = require('readline-sync');
let inputAge = rlSync.question("How old are you? ");
inputAge = Number(inputAge);

console.log(`You are ${inputAge} years old.`);

let listOfNumOfYearsFromNow = [10, 20, 30, 40];

for (i = 0; i < listOfNumOfYearsFromNow.length; i++) {
  let newAge = inputAge + listOfNumOfYearsFromNow[i];
  console.log(`In ${listOfNumOfYearsFromNow[i]} years, you will be ${newAge} years old.`);
}
