// alert("hello"); //error bcz we are using node.js not browser
/* The alert() function is not available in Node.js because it's a browser-specific function used to display alerts in web browsers. If you try to run alert("hello");*/

let name = "tausif"; //string
let age = 22; //number i.e integer
let isLoggedIn = false; // boolean

//primitive dataTypes
//
//number = 2 to power 53  Represents numeric data, including integers and floating-point numbers
//
//bigint
//
//string = "" Represents textual data, enclosed in single ('') or double ("") quotes. Strings can contain characters, digits, symbols, or even an empty string.
//
//boolean = true/false Represents a logical value, either true or false
//
//null=standalone value i.e empty value its type is object.Represents the intentional absence of any value or object. It's a special value denoting "nothing" or "empty."
//
//undefined = value not assigned its type is undefined  Indicates that a variable has been declared but has not been assigned a value. It's the default value of uninitialized variables.
//
//symbol = unique

console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null);
console.log(typeof undefined);

/*
 Both null and undefined represent the absence of meaningful values, they are used in different contexts, and there are subtle differences between them:

null:

Explicit Assignment: null is explicitly assigned to variables or properties by developers to indicate the absence of a value or the intentional removal of a value.
Type: null is its own type in JavaScript, distinct from object and other types.
Usage: It's often used when you want to represent an empty or non-existent value, such as when a variable has not been initialized yet or when you want to clear the value of a variable.
undefined:

Automatic Initialization: Variables that have not been assigned a value default to undefined.
Type: undefined is a type in JavaScript, and it's used to represent the absence of a value due to variables being declared but not yet initialized, or properties that do not exist in an object.
Usage: It's often used as the default value for variables before they are assigned a meaningful value or as the return value of functions that do not explicitly return anything.
In summary, null is explicitly set by developers to indicate an absence of a value, while undefined is the default value for variables that have not been initialized or for properties that do not exist
*/
