// Truthy Values:
// A value is considered truthy if it converts to true when evaluated in a Boolean context. Examples of truthy values include:

// Non-empty strings: "hello", "123", "true"
// Non-zero numbers: 1, 42, 3.14
// Non-empty arrays and objects: [1, 2, 3], { key: "value" }
// The value true itself
//"false","0"," ",[],{},function(){}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
// Falsy Values:
// A value is considered falsy if it converts to false when evaluated in a Boolean context. Examples of falsy values include:

// The value false itself
// The number 0,-0,0n,""
// The empty string "" (empty string)
// The special value null
// The special value undefined
// The special value NaN (Not-a-Number)

if ("hello") {
  console.log("Truthy!"); // Output: Truthy!
}

if (0) {
  console.log("Truthy!");
} else {
  console.log("Falsy!"); // Output: Falsy!
}
//
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
const name = "";

if (name) {
  console.log("Hello, " + name);
} else {
  console.log("Hello, guest"); // Output: Hello, guest
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("emptyObj is empty");
}

//Nullish Coalesing Operator(??) null undefined
const emptyObj2 = null;
const name2 = emptyObj2 ?? "guest";
console.log(name2); // Output: guest

// Example 1:
const value1 = null;
const result1 = value1 ?? "default";
console.log(result1); // Output: "default"

// Example 2:
const value2 = undefined;
const result2 = value2 ?? "default";
console.log(result2); // Output: "default"

// Example 3:
const value3 = "value";
const result3 = value3 ?? "default";
console.log(result3); // Output: "value"
//
const value4 = null;
const value5 = undefined;
const value6 = "value";
const defaultValue = "default";

const result = value4 ?? value5 ?? value6 ?? defaultValue;
console.log(result); // Output: "value"
