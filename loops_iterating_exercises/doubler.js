function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);
// logs
// 5
// 10
// 20
// 40
// 80
