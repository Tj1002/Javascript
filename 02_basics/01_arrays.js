// Shallow Copy:

// A shallow copy of an array creates a new array and copies the references of the original array's elements into the new array. It means that changes made to the elements of the new array will affect the original array, and vice versa, as they both point to the same objects in memory.
{
  const originalArray = [{ name: "John" }, { name: "Alice" }];
  const shallowCopyArray = [...originalArray];

  console.log(shallowCopyArray);

  shallowCopyArray[0].name = "Bob"; // This also changes the name in the originalArray
  console.log(originalArray); // Output: [{ name: 'Bob' }, { name: 'Alice' }]
}
//
// Deep Copy:

// A deep copy of an array creates a new array and recursively copies the values of the original array's elements into the new array. It means that changes made to the elements of the new array will not affect the original array, and vice versa.
// Deep copying can be achieved using methods like map(), JSON.parse(JSON.stringify()),
// Using map()
{
  const originalArray = [{ name: "John" }, { name: "Alice" }];
  const deepCopyArray = originalArray.map((obj) => ({ ...obj }));

  deepCopyArray[0].name = "Bob"; // This does not affect the originalArray
  console.log(originalArray); // Output: [{ name: 'John' }, { name: 'Alice' }]
  console.log(deepCopyArray);
}

/**********************************************************************************************/

const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(myArr[2]); //3
const myArr2 = new Array(1, 2, 3, 4);
console.log(typeof myArr2); //obj
console.log(typeof myArr); //obj
console.log(myArr2); // [1,2,3,4]

// In JavaScript, arrays are a specialized type of object. When you use the typeof operator on an array, it will return 'object'
//in JavaScript, using const with an array variable means that the variable itself cannot be reassigned to a different array. However, it does not make the array immutable. This means you can still modify the contents of the array, such as changing, adding, or removing elements.

//*****************************************Arrays Methods************************************/

//+++++++++++++++++++++++++++++++++++++++++++++++++++ push():+++++++++++++++++++++++++++++++++++

// Adds one or more elements to the end of an array and returns the new length of the array.

const array1 = [1, 2, 3, 4];
array1.push(7);
console.log(array1); // Output: [1, 2, 3, 4,7]

// pop():

// Removes the last element from an array and returns that element

const array2 = [1, 2, 3];
const poppedElement = array2.pop();
console.log(poppedElement); // Output: 3
console.log(array2); // Output: [1, 2]

// shift():

// Removes the first element from an array and returns that element.
const array3 = [1, 2, 3];
const shiftedElement = array3.shift();
console.log(shiftedElement); // Output: 1
console.log(array3); // Output: [2, 3]

// unshift():

// Adds one or more elements to the beginning of an array and returns the new length of the array.
const array4 = [2, 3];
array4.unshift(1);
console.log(array4); // Output: [1, 2, 3]

// Join Method:

// Joins all elements of an array into a string, optionally separating the elements with a specified separator string.
const array5 = ["Hello", "World", "!"];
const joinedString = array5.join(" ");
console.log(joinedString); // Output: "Hello World !"
//
//IndexOf Method:

// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

const array6 = [1, 2, 3, 4, 5];
const index = array6.indexOf(3);
console.log(index); // Output: 2

//
//Includes Method:

// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array7 = [1, 2, 3, 4, 5];
const includes = array7.includes(3);
console.log(includes); // Output: true

//
//slice() Method:
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
{
  const array = [1, 2, 3, 4, 5];

  // const newArray = array.slice(2); // Extracts elements from index 2 to the end
  // console.log(newArray); // Output: [3, 4, 5]

  // const newArray = array.slice(1, 4); // Extracts elements from index 1 to 3
  // console.log(newArray); // Output: [2, 3, 4]

  // const newArray = array.slice(-3, -1); // Extracts elements from the third last to the second last
  // console.log(newArray); // Output: [3, 4]

  const newArray = array.slice(2); // Extracts elements from index 2 to the end
  console.log(newArray); // Output: [3, 4, 5]
}

// splice() Method:
// Definition: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//       Removing single Elements:

const array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Removes 1 element at index 2
console.log(array); // Output: [1, 2, 4, 5]
{
  //      Inserting Elements:

  const array = [1, 2, 4, 5];
  array.splice(2, 0, 3); // Inserts 3 at index 2
  console.log(array); // Output: [1, 2, 3, 4, 5]
}
{
  //  Replacing Elements:

  const array = [1, 2, 4, 5];
  array.splice(2, 1, 3); // Replaces 1 element at index 2 with 3
  console.log(array); // Output: [1, 2, 3, 5]
}
{
  //  Removing and Inserting Multiple Elements:

  const array = [1, 2, 3, 4, 5];
  array.splice(1, 2, "a", "b", "c"); // Removes 2 elements starting from index 1 and inserts 'a', 'b', 'c'
  console.log(array); // Output: [1, 'a', 'b', 'c', 4, 5]
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/// concat
//concat():

// Combines two or more arrays.
{
  const array1 = [1, 2];
  const array2 = [3, 4];
  const newArray = array1.concat(array2);
  console.log(newArray); // Output: [1, 2, 3, 4]

  array1.push(array2);
  console.log(array1); // output [1, 2, [3, 4]];
}
//++++++++++++++++++++++++++++++++++++++++++++++++using spread operator+++++++++++++++++++++++++++
{
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = [...array1, ...array2];
  console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
  //
  const originalArray = [1, 2, 3];
  const newArray = [...originalArray, 4, 5];
  console.log(newArray); // Output: [1, 2, 3, 4, 5]
}

//+++++++++++++++++++++++++++++++++++++++++++flat+++++++++++++++++++++++++++++++++++++
//
//The flat() method is used to flatten nested arrays. It creates a new array that contains all the elements of the original array flattened to a certain depth.
const nestedArray = [1, 2, [3, 4]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4]
console.log(nestedArray); //output [1, 2, [3, 4]];

// You can use Infinity as an argument to flatten recursively to any depth.

//flat() removes empty slots from arrays.
const arrayWithEmptySlots = [1, , 2, , 3];
const flatArrays = arrayWithEmptySlots.flat();
console.log(flatArrays); // Output: [1, 2, 3]

//
//+++++++++++++++++++++++++++++++++++++++++++isArray()+++++++++++++++++++++++++++++++++
//
// The Array.isArray() method is used to determine whether a value is an array. It returns true if the given value is an array; otherwise, it returns false.

console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray({ foo: "bar" })); // Output: false

//
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(Array.isArray(nestedArr)); // Output: true
console.log(Array.isArray(nestedArr[0])); // Output: true
console.log(Array.isArray(nestedArr[0][0])); // Output: false
//
//
//++++++++++++++++++++++++++++++++from()+++++++++++++++++++++++++++++++++++++++++
//
//
// The from() method in JavaScript is a static method that creates a new, shallow-copied Array instance from an array-like or iterable object.
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b', 'c']
//
const str = "hello";
const charArray = Array.from(str);
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
//
// from keys
const obj = { a: 1, b: 2, c: 3 };
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ['a', 'b', 'c']

//
//from values
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: [1,2,3]
