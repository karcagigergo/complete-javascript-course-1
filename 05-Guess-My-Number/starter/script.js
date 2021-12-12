'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/* console.log(
  typeof document.querySelector('.guess').value,
  document.querySelector('.guess').value
); */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, score);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // // When number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Challenge:
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // 2. In the handler function, restore initial values of the 'score' and
  // 'secretNumber' variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 3. Restore the initial conditions of the message, number, score and guess input
  // fields
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // 4. Also restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
