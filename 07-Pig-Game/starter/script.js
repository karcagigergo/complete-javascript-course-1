'use strict';

// Selecting elements:
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Setting current scores:
let currentScore = 0;

// Starting conditions:
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

// Rolling dice functionality:
btnRoll.addEventListener('click', function () {
  // Generating random diceroll
  const dice = Math.floor(Math.random() * 6) + 1;

  // Display the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add the dice to the current score
    currentScore += dice;
    current0Element.textContent = currentScore; //CHANGE LATER
  } else {
    // Switch to next player
  }
});
