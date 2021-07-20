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
// JS Fundamentals part one: Lecture 7: If/else statements:

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license.');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// JS Fundamentals part one: Lecture 8: Type coertion and conversion:

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18);

// console.log(Number('Gergő'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type conertion here JS convert numbers to strings automatically:
// console.log('I am ' + 23 + ' years old.') // + operator converts numbers to strings
// console.log('23' - '10' - 3); // all the other operators convert strings tu numbers
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// JS Fundamentals part one: Lecture 9: Truthy and Falsy Values:
// 5 falsy values 0, '', undefined, null, NaN and false
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 101;
// if (money) {
//   console.log(`Don't spend it all!`)
// } else {
//   console.log(`You should get a job.`)
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined!')
// } else {
//   console.log('Na mégsem?')
// }

// JS Fundamentals part one: Equality Operators: == vs. ===

// const age = 18;
// if (age === 18) console.log(`You can drink now! (strict)`);
// if (age == 18) console.log(`You can drink now! (loose)`);

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is good number!")
// } else if (favourite === 7) {
//   console.log("7 is also a good number.")
// } else {
//   console.log("Number is not 23 or 7!")
// }


// if (favourite !== 23) {
//   console.log("Why not the number 23?")
// }

// JS Fundamentals part one: Boolean Logic
// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive.");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriversLicence && hasGoodVision && isTired);


// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive...");
// }

// JS Fundamentals part one: SWITCH STATEMENT:
// const day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("Plan my course structure");
//     console.log("Watch RoR videos!");
//     break;
//   case "tuesday":
//     console.log("Chill");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Study coding");
//     break;
//   case "friday":
//     console.log("Continue JS course");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Weekend!!!");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan my course structure");
//   console.log("Watch RoR videos!");
// } else if (day === "tuesday") {
//   console.log("Chill");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Study coding");
// } else if (day === "friday") {
//   console.log("Continue JS course");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Weekend!!!");
// } else {
//   console.log("Not a valid day!")
// }

// JS Fundamentals part one: STATEMENTS AND EXPRESSIONS:

// JS Fundamentals part one: Ternary operator:
const age = 20;
// age >= 18 ? console.log("I'd like to drink wine.🍷") :
//   console.log("I cannot drink wine.💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷"
} else {
  drink2 = "water 💧"
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`)