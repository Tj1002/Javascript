// if (true) {
//   const a = 10;
//   let b = 20;
//   var c = 30;
// }
// console.log(a); ReferenceError: a is not defined

// console.log(b); ReferenceError: b is not defined
// console.log(c);  // output 30 . This is an issue with var that we can access outside it's scope

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// var c = 300;
// if (true) {
//   const a = 10;
//   let b = 20;
//   var c = 30;
// }
// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined

// console.log(c); //output = 30 here value of c is also chnaged..this is also an issue with var
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
  const username = "tausif";
  console.log(username);
  function two() {
    const password = "12345";
    console.log(username, password);
  }
  // console.log(password); //ReferenceError: password is not defined
  two(); // tausif 12345
}
one();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (true) {
  const username = "tausif";
  if (username === "tausif") {
    const password = "12345";
    console.log(username, password); // output tausif 12345
  }
  //console.log(password); //ReferenceError: password is not defined
}
// console.log(username); //ReferenceError: password is not defined
//
//
//*************************************************Hoisting************************************* */
//
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
addOne(5);

function addOne(num) {
  return num + 1;
}
// addOne(5);

// here we can also call function before it is defined.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
// addTwo(5); ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
// addTwo(5);
