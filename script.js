document.getElementById('checkScoreBtn').addEventListener('click', function() {
  const ans1 = document.getElementById('q1').value.trim().toLowerCase();
  const ans2 = document.getElementById('q2').value.trim().toLowerCase();

  let score = 0;

  if (ans1 === "new delhi") {
    score++;
  }

  if (ans2 === "tiger") {
    score++;
  }

  document.getElementById('scoreDisplay').innerText = `Your Score: ${score} / 2`;
});
