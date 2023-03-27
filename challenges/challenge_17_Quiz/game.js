const question = document.getElementById("question");
const questionCounterText = document.getElementById("questionCounter");
const questionScoreText = document.getElementById("questionScore");
const finalScore = document.getElementById("finalScore");
const mainContainer = document.getElementById("mainContainer");
const game = document.getElementById("game");
const loader = document.getElementById("loader");
const choices = document.getElementsByClassName("choice-text");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const CORRECT_BONUS = 5;
var MAX_QUESTIONS = 0;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

async function getQuestions(api) {
  let responses = await fetch(api);
  let response = await responses.json();
  return response;
}

getQuestions(`https://opentdb.com/api.php?amount=20`)
  .then((loadedQuestions) => {
    loader.classList.add("d-none");
    game.removeAttribute("style");
    mainContainer.classList.add("bg-primary-subtle");
    MAX_QUESTIONS = loadedQuestions.results.length;
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
    startGame();
  })
  .catch((error) => {
    console.log("An error occurred" + error.message);
  });

function startGame() {
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length == 0) {
    // go to end page
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign(
      "/javascript/challenges/challenge_17_Quiz/end.html"
    );
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  for (let i = 0; i < choices.length; i++) {
    let choice = choices[i];
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    choice.classList.add("bg-white");
    choice.classList.add("border");
    choice.classList.add("border-5");
    choice.classList.add("text-secondary");
    choice.classList.add("h4");
    choice.style.width = "50%";
  }
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

for (const choice of choices) {
  // console.log(choice)
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "bg-success" : "bg-danger";

    if (classToApply == "bg-success") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.classList.remove("bg-white");
    selectedChoice.classList.add(classToApply);
    selectedChoice.classList.add("text-white");
    console.log(selectedChoice);
    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      selectedChoice.classList.remove("text-white");
      getNewQuestion();
    }, 1000);
  });
}

function incrementScore(num) {
  score += num;
  questionScoreText.innerText = score;
}
