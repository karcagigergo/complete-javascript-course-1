'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const if = 0;

//FUNCTIONS - LESSON 1
// function logger() {
//   console.log('My name is Gergő');
// }

// //calling /running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor("two", "zero");
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//FUNCTIONS - LESSON 2
//DECLARATION
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1991);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);