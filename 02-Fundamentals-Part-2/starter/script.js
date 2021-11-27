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
// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }
// const age1 = calcAge1(1991);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Object methods

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   age: 2021 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas)
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2021 - this.birthYear
//   // }

//   calcAge: function () {
//     this.age = 2021 - this.birthYear
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? "has a drivers license" : "he doesn't have a drivers license"}.`
//   }
// }

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());

//Loops
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
// }

const jonasArray = [
  'Jonas',
  'Schmedtman',
  2021 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

const types = []

for (let i = 0; i < jonasArray.length; i++) {
  //reading from jonasArray
  console.log(jonasArray[i])
  //filling up types array
  types[i] = typeof jonasArray[i]
  types.push(typeof jonasArray[i])
}

console.log(types)

const years = [1991, 2007, 1967, 1667]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i])
}
console.log(ages)