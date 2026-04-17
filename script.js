const choices = ["stone", "paper", "scissors"];

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
  
  const displayUserChoice = capitalizeFirstLetter(userChoice);
  const displayComputerChoice = capitalizeFirstLetter(computerChoice);
  const displayResult = capitalizeFirstLetter(result);
  
  const resultTextElement = document.getElementById("resultText");
  resultTextElement.textContent = `You chose ${displayUserChoice}, Computer chose ${displayComputerChoice} → You ${displayResult}`;
}

const stoneBtn = document.getElementById("stoneBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
