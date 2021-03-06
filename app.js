// Variables
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Score')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Score')
}
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');


let winningScore = 3;
let isGameOver = false;

// Functions

const updateScore = function(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

const resetScore = function() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove('has-text-success', 'has-text-danger');
  p2.display.classList.remove('has-text-success', 'has-text-danger');
  p1.button.disabled = false;
  p2.button.disabled = false;
}

// Events
p1.button.addEventListener('click', function(e) {
  updateScore(p1, p2)
})
p2.button.addEventListener('click', function(e) {
  updateScore(p2, p1)
})
reset.addEventListener('click', resetScore)
playTo.addEventListener('change', function(e) {
  winningScore = parseInt(this.value);
  resetScore();
})