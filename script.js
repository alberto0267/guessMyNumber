'use strict';

let numberSecret = Math.trunc(Math.random() * 30 + 1);
let message = document.querySelector('.message');
// document.querySelector('.number').textContent = numberSecret;
let number = document.querySelector('.number');
// number.textContent = numberSecret;

let scoreInitial = 20;
let score = document.querySelector('.score');
let reset = document.querySelector('.again');
let highscore = document.querySelector('.highscore');
let highscores = 0;
// // document.querySelector('.message');

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Acertaste😎👍';

// // document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 0;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(typeof guessNumber);

  console.log('no entra' + scoreInitial);
  console.log('no entra ' + ' highscore ' + highscores);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Debe ser un numero 🫠';
  } else if (guessNumber === numberSecret) {
    message.textContent = 'Acertaste😎👍';
    root.style.backgroundColor = 'green';

    if (scoreInitial > highscores) {
      console.log('entra en if ' + scoreInitial);
      highscores = scoreInitial;
      highscore.textContent = scoreInitial;
    } else {
      console.log('entra en else ' + scoreInitial);
    }
  } else if (guessNumber > numberSecret) {
    if (scoreInitial > 0) {
      message.textContent = 'Muy alto 💩';
      scoreInitial--;
      score.textContent = scoreInitial;
    } else if (scoreInitial < 1) {
      message.textContent = 'Perdiste 😂';
    }
  } else if (guessNumber < numberSecret) {
    if (scoreInitial > 0) {
      message.textContent = 'Muy bajo 💩';
      scoreInitial--;
      score.textContent = scoreInitial;
    } else if (scoreInitial < 1) {
      message.textContent = 'Perdiste 😂';
    }
  }
});

reset.addEventListener('click', () => {
  console.log('entra en reset');
  numberSecret = Math.trunc(Math.random() * 30 + 1);
  // number.textContent = numberSecret;
  root.style.backgroundColor = 'black';
  score.textContent = 20;
  scoreInitial = 20;
});
