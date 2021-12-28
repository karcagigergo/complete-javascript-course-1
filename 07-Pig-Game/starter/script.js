'use strict';

// Selecting elements:
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Creating empty variables and reassining them inside the init function
let scores, currentScore, activePlayer, playing;

// Starting conditions function:
const init = function () {
  // Scores array to keep track of the scores
  scores = [0, 0];
  // Setting current scores:
  currentScore = 0;
  // Active player: first it is player number 0 AKA player 1
  activePlayer = 0;
  playing = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

init();

// Switch to next player function:
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling dice functionality:
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random diceroll
    const dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add currentscore to activeplayer's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
