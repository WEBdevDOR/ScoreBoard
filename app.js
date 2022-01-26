// Variables

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

let pOneScore = 0;
let pTwoScore = 0;
let winningScore = 3;

isGameOver = false;

// Functions
const resetScore = function() {
  isGameOver = false;
  pOneScore = 0;
  pTwoScore = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Score.classList.remove('has-text-success', 'has-text-danger');
  p2Score.classList.remove('has-text-success', 'has-text-danger');
  p1Button.disabled = false;
  p2Button.disabled = false;
}

// Events
p1Button.addEventListener('click', function(e) {
  if (!isGameOver) {
    pOneScore += 1;
    p1Score.textContent = pOneScore;
    if (pOneScore === winningScore) {
      isGameOver = true;
      p1Score.classList.add('has-text-success');
      p2Score.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
})
p2Button.addEventListener('click', function(e) {
  if (!isGameOver) {
    pTwoScore += 1;
    p2Score.textContent = pTwoScore;
    if (pTwoScore === winningScore) {
      isGameOver = true;
      p2Score.classList.add('has-text-success');
      p1Score.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
})
reset.addEventListener('click', resetScore)
playTo.addEventListener('change', function(e) {
  winningScore = parseInt(this.value);
  resetScore();
})