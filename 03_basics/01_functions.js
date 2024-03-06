//+++++++++++++++++++++++++++++++++++++++Functions++++++++++++++++++++++++++++++++++++++++++++++//
//
//Functions in JavaScript are reusable blocks of code that can be called to perform a specific task or calculate a value.
//+++++++++++++++++++++++++++++++++++++++++++++standard parameters+++++++++++++++++++++++++++++++//
// Function with standard parameters
function greet(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

// Calling the function with standard parameters
greet("John", "Hello"); // Output: Hello, John!
//
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++// Default Parameters:++++++++++++++++++++//
{
  // Function with default parameters
  function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
  }

  // Calling the function without providing the second parameter
  greet("John"); // Output: Hello, John!

  // Calling the function with both parameters provided
  greet("John", "Hi"); // Output: Hi, John!
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++ Rest Parameters++++++++++++++++++++++++++++++++//
// Function with rest parameters to accept variable number of arguments
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// Calling the function with different number of arguments
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10)); // Output: 10
console.log(sum()); // Output: 0

function calculateCartPrice(val1, val2, ...products) {
  return products;
}
console.log(calculateCartPrice(10, 20, 30, 40, 50)); // return array [ 10, 20, 30 ]
//++++++++++++++++++++++++++++++++++++++Destructured Parameters:+++++++++++++++++++++++//

// Function with destructured parameters
{
  function greet({ name, greeting }) {
    console.log(`${greeting}, ${name}!`);
  }

  // Object containing values for destructured parameters
  let person = { name: "John", greeting: "Hello" };

  // Calling the function with destructured parameters
  greet(person); // Output: Hello, John!
}

//
// If no arguments are passed to a function in JavaScript, the parameters inside the function will typically default to undefined.
