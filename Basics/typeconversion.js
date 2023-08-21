let score = "33";

// console.log(typeof score);
// console.log(typeof score);

let scoreInNumber = Number(score); // one way of converting string into number

//if we pass score = '33abc' it will also got converted to number so always check NaN and don't relay only on Number.

// while converting to  number
// null will converted to 0.
//undefined will converted to NaN.
// boolean like true or false will converted to its respective indicator. i.e 0 or 1. 0 for false and 1 for true.
// String that cannot be converted to number such as 'roshan' will return NaN.

// while type typeconversion to boolean.
// for empty string i.e "" => false.
// for non empty string for e.g "roshan" => true.
// for 1 => true
// for 0 => false
// console.log(typeof scoreInNumber);

let isLoggedIn = "roshan";

let booleanValue = Boolean(isLoggedIn);

// console.log(booleanValue);

//***************** operations in javascript ***********************

let value = 33;
let negValue = -value;
// console.log(negValue);

// console.log("1" + 2 + 2); // => 122 decided by first value
// console.log(1 + 2 + "2"); // => 32 decided by first value

// tricky conversion
// console.log(+true); // => 1 , plus will convert true to number
// console.log(+""); // => 0 , plus will convert false to number

let num1, num2, num3;

num1 = num2 = num3 = 4; //should not use this approach because of readability issue.
let counter = 100;
counter++; //using postfix increment operator
++counter; //using prefix increment operator
console.log(counter);
