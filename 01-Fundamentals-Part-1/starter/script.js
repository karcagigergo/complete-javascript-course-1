// JS Fundamentals part one: Lecture 1: Values and variables:
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Gergő');
// console.log(23);

// let firstName = "Bob";
// console.log(firstName);
// let PI = 3.1415;


// JS Fundamentals part one: Lecture 2: Data Types:
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Gergő');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// JS Fundamentals part one: Lecture 3: Data Types: Let, Const and Var:
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1993;

// JS Fundamentals part one: Lecture 4: Basic Operators:
// Math operators:
// const now = 2037;
// const ageGergo = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageGergo, ageSarah);

// console.log(ageGergo * 2, ageGergo / 10, 2 ** 3);
// 2 ** 3 meants 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Gergő';
// const lastName = 'Karcagi';
// console.log(firstName + ' ' + lastName);
// Assignment operators:
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--; // x = x + 1 = 99
// console.log(x);

// Comparison operators:
// console.log(ageGergo > ageSarah); // >, <, >==, <==
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// JS Fundamentals part one: Lecture 5: Operator precedence:

// const now = 2037;
// const ageGergo = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);


// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageGergo + ageSarah) / 2;
// console.log(ageGergo, ageSarah, averageAge);

// JS Fundamentals part one: Lecture 6: Strings and template literals:
/*
const firstName = 'Gergő';
const job = 'student';
const birthYear = 1991;
const year = 2021;

const gergo = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(gergo);

const gergoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(gergoNew);

console.log(`Just a regular string with backtick..`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license.');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);