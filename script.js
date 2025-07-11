function calculateScore(callback) {

  const ans1 = document.getElementById('q1').value.trim();
  const ans2 = document.getElementById('q2').value.trim();

  const userAnswers = [ans1, ans2];
  const correctAnswers = ["4", "Paris"];

  const score = callback(userAnswers, correctAnswers);

  document.getElementById('scoreDisplay').innerText = `Your Score: ${score}/${correctAnswers.length}`;
}

function strictScoring(userAns, correctAns) {
  let score = 0;
  for (let i = 0; i < correctAns.length; i++) {
    if (userAns[i] === correctAns[i]) {
      score++;
    }
  }
  return score;
}

function lenientScoring(userAns, correctAns) {
  let score = 0;
  for (let i = 0; i < correctAns.length; i++) {
    if (userAns[i].toLowerCase() === correctAns[i].toLowerCase()) {
      score++;
    }
  }
  return score;
}

document.getElementById('checkScoreBtn').addEventListener('click', function() {
  
  calculateScore(lenientScoring);
});
