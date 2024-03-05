let score = "50abc";
console.log(typeof score); //string
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //NaN
let s = null;
console.log(typeof s); //string
console.log(typeof s); //string

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
