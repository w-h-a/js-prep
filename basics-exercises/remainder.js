// Output ones place, tens place, hundreds place, thousands place, and so on...
let x = 200221; // This is the input number
let y = "1" // This is the initial place

/*
** While x is larger than 0, get r = x remainder 10, log "Here's the ys place: r",
** get the difference of x - r, assign x value of difference / 10, and update y to next place.
*/
while (x > 0) {
  let r = x % 10;
  console.log("Here's the " + y + "s" + " place:", r);
  let difference = x - r;
  x = difference / 10;
  y = y + "0";
}
