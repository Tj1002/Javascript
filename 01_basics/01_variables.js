const accountId = 14455536;
let accountEmail = "tausif@dev.com";
var accountPassword = "123456";
accountCity = "Delhi";
let accountState;
//accountId = 20; // not allowed bcz accountId is const
// console.log(accountId);
accountEmail = "t@t";

/*using let or const instead of var is generally considered a best practice in modern JavaScript and TypeScript development. Both let and const have block scope, which means they are scoped to the nearest enclosing block, rather than being function-scoped like var.

Here's a brief explanation of each  */

// prefer not to use {var} bcz of issue of block and functional scope
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // Output: 20
}
console.log(x); // 1O

const y = 10;
if (true) {
  const y = 20; // Output: 20  shadowing of variables, meaning you can declare a variable with the same name inside a block without affecting the outer variable
  console.log(y);
}
console.log(y); //10

var z = 10;

if (true) {
  var z = 20;
  console.log(z); // Output: 20
}

console.log(z); // Output: 20

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountState,
  accountCity,
]);

/* if you declare a variable without assigning it a value, JavaScript initializes it with a special value called undefined. This behavior is consistent with JavaScript's dynamic typing, where variables can change type dynamically during runtime example:accountState
 */
