const score = 400;

const balance = new Number(800);

// console.log(score);
// console.log(balance.toString().length); //converting number into string.

// console.log(balance.toFixed(2)); //making value fixed after decimal points

const float = 1323.494455;
// console.log(float.toPrecision(3)); //taking precision of the number. Prority is given to number before decimal.

///\ ++++++++++ Maths ++++++++++++++++

// console.log(Math);
const arr = [1, 3, 4, 7, 0];
// console.log(Math.abs(-5)); //abs absolute value (converting negative into positive)
// console.log(Math.round(4.3)); //rounding off number.
// console.log(Math.ceil(4.3)); //will give ceilling value
// console.log(Math.floor(4.9)); //will give floor value
// console.log(Math.min(1, 3, 4, 5, 0, -1)); //return minimum value
// console.log(Math.max(1, 3, 4, 5, 0, -1)); // return maximum value
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//Math.random generate random value between 0 and 1 , multiplying random value with (max-min) will give whole number but not in every case so plus 1 .
// sometimes we can get decimal value so Math.floor()
// To get desire value i.e always greater than or equal to min so plus min at last.
