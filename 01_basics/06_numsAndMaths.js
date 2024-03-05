const score = 100;
const balance = new Number(200); // object which is of type number
console.log(score); //100
console.log(balance); //200
const newBal = balance.toString();
console.log(newBal); // 200 but it is a string
console.log(typeof newBal); //string
console.log(typeof balance); //object
console.log(balance.toString().length); //3
console.log(balance.__proto__); //methods available on number object

//*****************************toFixed()******************************** */
//

// The toFixed() method is a built-in JavaScript function that is used to format a number using fixed-point notation. It allows you to specify the number of digits to appear after the decimal point.
//  It rounds the number to the nearest specified decimal place, and if necessary, pads the number with zeros to meet the specified length.
//
//
console.log(balance.toFixed(1));
const num = 10.56789;
const formattedNumber = num.toFixed(2);
console.log(formattedNumber); // Output: "10.57"

const number = 123.456789;
console.log(number.toFixed(0)); // Output: "123"
console.log(number.toFixed(3)); // Output: "123.457"
console.log(number.toFixed(6)); // Output: "123.456789"

//
//
// ************************************************toPrecision()****************************************

// The toPrecision() method is used to format a number using a specified precision. It returns a string representation of a number with a specified number of significant digits.
{
  const number = 123.456789;
  console.log(number.toPrecision(2)); // Output: "1.2e+2"
  console.log(number.toPrecision(6)); // Output: "123.457"
  console.log(number.toPrecision(8)); // Output: "123.45679"
}
//
//
// ++++++++++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
//abs
// Returns the absolute value of a number.
//
console.log(Math.abs(-5)); // Output: 5 (positive number)
console.log(Math.abs(5)); // Output: 5 (positive number)
console.log(Math.abs(-7.5)); // Output: 7.5 (positive number)
console.log(Math.abs(7.5)); // Output: 7.5 (positive number)
//
//ceil
//Returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(5.3)); // Output: 6 (positive number)
console.log(Math.ceil(-5.3)); // Output: -5 (negative number)
//
// floor
// Returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.8)); // Output: 5 (positive number)
console.log(Math.floor(-5.8)); // Output: -6 (negative number)
//
//round
//Returns the value of a number rounded to the nearest integer.
console.log(Math.round(5.3)); // Output: 5 (positive number)
console.log(Math.round(5.8)); // Output: 6 (positive number)
console.log(Math.round(-5.3)); // Output: -5 (negative number)
console.log(Math.round(-5.8)); // Output: -6 (negative number)
//
//pow
//
console.log(Math.pow(2, 3)); // Output: 8 (positive numbers)
console.log(Math.pow(-2, 3)); // Output: -8 (negative base, positive exponent)
console.log(Math.pow(2, -3)); // Output: 0.125 (positive base, negative exponent)
console.log(Math.pow(-2, -3)); // Output: -0.125 (negative base, negative exponent)
//
// sqrt
//
console.log(Math.sqrt(9)); // Output: 3 (positive number)
console.log(Math.sqrt(16)); // Output: 4 (positive number)
console.log(Math.sqrt(-9)); // Output: NaN (square root of negative number is NaN)
//
//random
//  Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Output: Random number between 0 and 1
//
//PI
//
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.PI.toFixed(2)); // Output: 3.14
//
//min
//
console.log(Math.min(10, 20, 30)); // Output: 10
//
//max
//
console.log(Math.max(10, 20, 30)); // Output: 30

const min = 1;
const max = 100;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); // Output: Random integer between 1 and 100
