//*************************for Loop:*************************** */
for (let i = 0; i < 5; i++) {
  console.log("for-Iteration", i);
}
//*************************while Loop:****************************************** */
let i = 0;
while (i < 5) {
  console.log("while-Iteration", i);
  i++;
}
//*********************************do-while Loop:******************************* */
let int = 0;
do {
  console.log("do-while Iteration", int);
  int++;
} while (int < 5);
//**************************************************************Using break):
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Stop the loop when i equals 3
  }
  console.log("Iteration", i);
}
//****************************************************continue */
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the iteration when i equals 3
  }
  console.log("Iteration", i);
}
//***********************************for of loop************************************ */
// for (variable of iterable) {
// Code block to be executed for each element
// }

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

const sentence = "Hello, world!";

for (const char of sentence) {
  console.log(char);
}
// map
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
//object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Iterating over object keys
for (const key of Object.keys(person)) {
  console.log(key + ": " + person[key]);
}

// Output:
// name: John
// age: 30
// city: New York
//****************************************for in loop */
//This loop is particularly useful for iterating over the keys of an object.
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

// Iterating over object properties
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Output:
// brand: Toyota
// model: Camry
// year: 2020
// color: blue
//****************************************forEach loop *************************************/
//
//forEach() is called on the array, and a callback function is passed to it. and doesnot return values
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (number, index) {
  console.log(`Number at index ${index}: ${number}`);
});
//using arrow fn
const colors = ["red", "green", "blue"];

colors.forEach((color) => console.log(color));
//pasing function
//
{
  const numbers = [1, 2, 3, 4, 5];

  function printNumber(number) {
    console.log(`Number: ${number}`);
  }

  numbers.forEach(printNumber);
}
{
  const numbers = [1, 2, 3, 4, 5];

  function printNumber(number) {
    console.log(`Number: ${number}`);
  }

  numbers.forEach(printNumber);
}
//array of an object
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 },
];

students.forEach((student) => {
  console.log(`${student.name} is ${student.age} years old.`);
});
