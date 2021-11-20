// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes 
//three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has
// 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 
//3 different countries. Store the
// returned values in 3 different variables, 
//and log them to the console

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and its capital is ${capitalCity}.`
// }

// const hungary = describeCountry("Hungary", 10000000, "Budapest");
// const unitedKingdom = describeCountry("UK", 60000000, "London");
// const brazil = describeCountry("Brazil", 200000000, "Brasília");
// console.log(hungary, unitedKingdom, brazil);

// Functions Challenge 1!!!!!!!!

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test numbers #1
const doplhinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
console.log(doplhinsAvg1, koalasAvg1);
// Test numbers #2
const doplhinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);
console.log(doplhinsAvg2, koalasAvg2);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win! 🐬 (${avgDolphins} vs. ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win! 🐨 (${avgKoalas} vs. ${avgDolphins})`
  } else {
    return `No team wins!😢`
  }
}

console.log(checkWinner(doplhinsAvg1, koalasAvg1))
console.log(checkWinner(doplhinsAvg2, koalasAvg2))
