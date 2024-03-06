//***************************************************this**************************** */
// The this keyword in JavaScript is a special identifier that refers to the context in which a function is called.
// In the global scope (outside of any function), this refers to the global object, which is window in a web browser environment and global in Node.js.
//
//console.log(this === window); // Output: true (in a browser)
//console.log(this === global); // Output: true (in Node.js)
//
//******************************function context************************************ */
// If the function is called as a method of an object, this refers to the object itself.
//
const user = {
  username: "victor",
  age: 25,
  welcomeMessage: function () {
    console.log(`welcome ${this.username}`);
    console.log(this);
  },
};
user.welcomeMessage(); //welcome victor
user.username = "sam";
user.welcomeMessage(); //welcome sam
console.log(this); // {} empty in node environment
//
// global object in browser is window object (impo)
//
//
const user1 = () => {
  let username = "victor";
  console.log(this.username); // undefined
};
user1();
// Arrow functions do not have their own this context, so they always inherit this from the surrounding lexical scope.
//basic
// const addThree = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addThree(1, 2)); //3

// +++++++++++++++++++++++++++++++++++++++++++++implicit+++++++++++++++++++++++++++++++++++++
const addThree = (num1, num2) => num1 + num2;
console.log(addThree(1, 2)); //3
// if we are using curley braces then we should write return keyword
