const saveScoreBtn = document.getElementById("saveScoreBtn");
const username = document.getElementById("username");
const MAX_HIGH_SCORE = 5;

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

if(mostRecentScore){
finalScore.innerText = mostRecentScore
}

saveScoreBtn.addEventListener("click", handleScore);

function handleScore(e) {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORE);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/javascript/challenges/challenge_17_Quiz/highscores.html");
}

username.addEventListener("keyup", handleKeyUpUsername);
function handleKeyUpUsername() {
  saveScoreBtn.disabled = !username.value;
}

