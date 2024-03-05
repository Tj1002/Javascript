const name = "tausif";
const repoCount = 6;

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const game = new String("Battleground"); // object
console.log(game);
console.log(game[1]);
console.log(typeof game);
console.log(game.__proto__); /// give all the methods of string
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));

//***********************indexOf()******************************* */
//Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.
console.log(game.indexOf("u"));

const newStr = game.substring(0, 4);
console.log(newStr); // batt

// ****************************slice************************************
//
//
// the slice() method is used to extract a section of a string, array, or array-like object and returns a new object containing the extracted elements
// It takes two optional parameters: start and end, where start is the index at which to begin extraction (inclusive), and end is the index at which to end extraction (exclusive). If end is omitted, the slice continues to the end of the string.
// The original string is not modified; instead, slice() returns a new string containing the extracted characters.
//
//
//
const str = "Hello, world!";
const slicedStr = str.slice(7, 12); // Extracts "world"
console.log(slicedStr); // Output: "world"
//
const str1 = "Hello, world!";
const slicedStr1 = str1.slice(-6); // Extracts "world!"
console.log(slicedStr1); //Output: "world!";
//
const str2 = "Hello, world!";
const slicedStr2 = str2.slice(-6, -1); // Extracts "world"
console.log(slicedStr2); // Output: "world"
//
const str3 = "Hello, world!";
const slicedStr3 = str3.slice(0, -7); // Extracts "Hello,"
console.log(slicedStr3); // Output: "Hello,"

// ****************************trim****************************************
//
// The trim() method in JavaScript is used to remove whitespace from both ends of a string.
//  It returns a new string with the whitespace trimmed from the beginning and end.
//
//
const str4 = "   Hello, world!   ";
const trimmedStr = str4.trim();
console.log(trimmedStr); // Output: "Hello, world!"

const str5 = "   Hello, world!   ";
const trimmedAndUpperCaseStr = str5.trim().toUpperCase();
console.log(trimmedAndUpperCaseStr); // Output: "HELLO, WORLD!"
//
//

// ************************************replace*************************************
//
//The replace() method in JavaScript is used to find a specified substring (or a pattern matched by a regular expression) within a string and replace it with another substring. It returns a new string where the first occurrence of the specified substring is replaced
//
const url = "https://tausif@dev.com/tj%24jawed";
const newUrl = url.replace("%24", "-");
console.log(url); //https://tausif@dev.com/tj%24jawed
console.log(newUrl); //https://tausif@dev.com/tj-jawed
//
console.log(url.includes("tausif")); //true
console.log(url.includes("tj")); //true
console.log(url.includes("tausj")); //false
//
const text = "Hello, world!";
const newText = text.replace("world", "universe");
console.log(newText); // Output: "Hello, universe!"
//

// **********************************split****************************************************
//
// The split() method in JavaScript is used to split a string into an array of substrings based on a specified separator.
const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words); // Output: ["The", "quick", "brown", "fox"]
//
const st = "apple,banana,orange,grape";
const fruits = st.split(",", 2);
console.log(fruits); // Output: ["apple", "banana"]
//
const sentences = "The quick brown fox";
const word = sentences.split(/\s+/);
console.log(word); // Output: ["The", "quick", "brown", "fox"]
//
//
//*************************************concat(str1, str2, ...): ************************************
const con1 = "Hello";
const con2 = "World";
console.log(con1.concat(" ", con2)); // Output: "Hello World"
