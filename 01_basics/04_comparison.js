console.log("2" > 1); //true
console.log("02" > 1); //true

/*  when comparing strings with numbers using comparison operators such as >, <, >=, <=, etc., JavaScript will attempt to convert the strings to numbers before performing the comparison. If the conversion succeeds, it will compare the numbers. Otherwise, it will compare the strings lexicographically based on their Unicode code points. */

console.log("a" < "b"); //true

console.log(null > 0); //false
console.log(null > 0); //false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null === 0); //false
console.log(null == 0); //false

console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

console.log("2" === 2); // strict check //true
console.log("2" == 2); //false
