console.clear();
"use strict";

const target = parseInt(Math.random() * 100, 10) + 1; console.log(target);
const guessForm = document.querySelector('.guessForm');

let repeat = [];
let attempts = 0;

function myMessage(stuff) {
  let message = document.querySelector('.message');
  message.innerHTML = stuff;
}

guessForm.addEventListener("submit", () => {
  event.preventDefault();

  if (attempts <= 4) {

    attempts++

    let guess = parseInt(document.querySelector('.guess').value);
    let lastItem = repeat.pop();

    repeat.push(guess);

    if (guess === target) {
      myMessage(`Yep.  Number was ${target}`);
    } else if (lastItem === guess) {
      myMessage(`Hey, you're repeating yourself`);
    } else if (guess > 100) {
      myMessage(`Enter a number less than 100 plz.`);
    } else if (guess <= 0) {
      myMessage(`Enter a number more than 0 plz.`);
    } else if (guess > target) {
      myMessage(`Your guess is high`);
    } else {
      myMessage(`Your guess is low`);
    }
  } else {
    myMessage(`${attempts} is too many tries. LOSER. Number was ${target}.`);
  };
});
