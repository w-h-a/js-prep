//Output one factorial, two factorial, ..., five factorial with the following function.

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// My solution:

oneFactorial = times(1, 1);
twoFactorial = times(2, oneFactorial);
threeFactorial = times(3, twoFactorial);
fourFactorial = times(4, threeFactorial);
fiveFactorial = times(5, fourFactorial);

// Book's alternative solution:

times(times(times(times(times(1,1), 2), 3), 4), 5);
