let score = "50abc";
console.log(typeof score); //string
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //NaN
let s = null;
console.log(typeof s); //object


let valueInNum = Number(s);
console.log(typeof valueInNum); // number
console.log(valueInNum); //0 value of null in number is 0

//"50"=>50
//"50abc"=>NaN
//true=>1
//false=>0
//null=>0

let isLoggedIn = 1;
console.log(typeof isLoggedIn);
let boolenIsLoggedIn = Boolean(isLoggedIn);
console.log(boolenIsLoggedIn);
console.log(typeof boolenIsLoggedIn);

let num = 33;
let strNum = "" + num;
let str = num.toString();
console.log(strNum);
console.log(str);
console.log(typeof str);
console.log(typeof strNum);

//***************************  operations*****************************************

let value = 10;
let negval = -value;
// console.log(negval);

let str1 = "tausif ";
let str2 = "jawed";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //"12"
// console.log(1 + "2"); //"12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); //"32"
// console.log(1 + "2" + 2); // "122"

console.log(true);
console.log(+true); // o/p=1 when you use the unary plus operator (+) before a value, it attempts to convert that value to a number.
// console.log(true+); //error
console.log(+false); // o/p=0
console.log(+""); //o/p=0
console.log(+"75"); //o/p=0
console.log(+"tj"); //o/p=0

//prefix postfix

let x = 5;

// Prefix increment
let y = ++x; // y = 6, x = 6

// Postfix increment
let z = x++; // z = 6, x = 7

console.log(y); // Output: 6
console.log(z); // Output: 6
console.log(x); // Output: 7
