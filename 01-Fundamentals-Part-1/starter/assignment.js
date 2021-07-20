// JS Fundamentals part one: Lecture 1: Values and variables:
const country = "Hungary";
const continent = "Europe";
let population = 10000000;
console.log(`I am from ${country}, which is in ${continent}, with the population of ${population} people.`);

// JS Fundamentals part one: Lecture 2: Data Types:
const isIsland = false;
let language; // should be a const
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// JS Fundamentals part one: Lecture 3: Let, Const and Var:
language = 'Hungarian';

// JS Fundamentals part one: Lecture 4 Basic operators:
let populationHalfed = 10000000 / 2;
console.log(populationHalfed);
console.log(population += 1)

let populationOfFinland = 6000000;
console.log(population > populationOfFinland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language + ' .';
console.log(description);

// Strings and Template Literals:
const descriptionWithTemplateLiterals = `${country} is in ${continent}, and its
${population} million people speak ${language}`;

console.log(descriptionWithTemplateLiterals);

// JS Fundamentals part one: Lecture 5: Taking Decisions: if / else Statements
//If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
if (population > 33000000) {
  console.log(`${country}'s population is above average.`)
} else {
  console.log(`${country}'s population is ${33000000 - population} below average.`)
}


// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border")
// } else {
//   console.log("No borders!")
// }


// Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const languageExapmple = "spanish"

switch (languageExapmple) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log('2nd place in number of native speakers');
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}


// If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
console.log(`${country}'s population is ${population > 33000000 ? "above average" : "below average"}`)
