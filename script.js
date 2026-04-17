let playerScore = 0;
let computerScore = 0;

const choices = ["stone", "paper", "scissors"];

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const resultTextElement = document.getElementById("resultText");
const stoneBtn = document.getElementById("stoneBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  }
  
  if (
    (userChoice === "stone" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "stone")
  ) {
    return "win";
  }
  
  return "lose";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }
  
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  
  const displayUserChoice = capitalizeFirstLetter(userChoice);
  const displayComputerChoice = capitalizeFirstLetter(computerChoice);
  const displayResult = capitalizeFirstLetter(result);
  
  resultTextElement.textContent = `You chose ${displayUserChoice}, Computer chose ${displayComputerChoice} → You ${displayResult}`;
}

stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
