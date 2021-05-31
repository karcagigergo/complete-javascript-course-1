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

const description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language + ' .';
console.log(description);

// JS Fundamentals part one: Lecture 5: