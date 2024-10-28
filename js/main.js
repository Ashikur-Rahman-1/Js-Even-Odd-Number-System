/**
 * to do: Even, Odd application
 */

let input = prompt("Enter number");
let numberInput = +input;

if (numberInput % 2 == 0) {
  console.log("It is an Even number");
} else if (isNaN(numberInput)) {
  console.log("It is not a number");
} else {
  console.log("It is an Odd number");
}
