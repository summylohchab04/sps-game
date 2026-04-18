// Initialize scores from LocalStorage or 0
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

const choices = ["stone", "paper", "scissors"];

// Audio elements with safe relative fallback paths to avoid loud console errors 
// if external URLs fail, although we are using data URIs of tiny blank sounds
// to ensure it works without external dependencies directly after paste.
const clickSound = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
const winSound = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
const loseSound = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const resultTextElement = document.getElementById("resultText");
const stoneBtn = document.getElementById("stoneBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");
const gameButtons = [stoneBtn, paperBtn, scissorsBtn];

// Initial UI update
updateScoreUI();
checkGameEnd();

function playSound(audio) {
  if (!audio.paused) {
    audio.currentTime = 0;
  }
  audio.play().catch(e => console.log("Audio playback prevented"));
}

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

function animateResult() {
  resultTextElement.classList.remove("result-animate");
  void resultTextElement.offsetWidth; // Trigger reflow
  resultTextElement.classList.add("result-animate");
}

function updateScoreUI() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function saveScores() {
  localStorage.setItem('playerScore', playerScore);
  localStorage.setItem('computerScore', computerScore);
}

function setButtonsState(disabled) {
  gameButtons.forEach(btn => {
    btn.disabled = disabled;
  });
}

function checkGameEnd() {
  if (playerScore >= 5 || computerScore >= 5) {
    setButtonsState(true);
    if (playerScore >= 5) {
      resultTextElement.textContent = "🎉 You Won the Game!";
      playSound(winSound);
    } else {
      resultTextElement.textContent = "💻 Computer Won the Game!";
      playSound(loseSound);
    }
    animateResult();
    return true;
  }
  return false;
}

function playGame(userChoice) {
  if (playerScore >= 5 || computerScore >= 5) return;
  
  playSound(clickSound);
  
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  
  if (result === "win") {
    playerScore++;
    playSound(winSound);
  } else if (result === "lose") {
    computerScore++;
    playSound(loseSound);
  }
  
  saveScores();
  updateScoreUI();
  
  if (playerScore >= 5 || computerScore >= 5) {
    checkGameEnd();
  } else {
    const displayUserChoice = capitalizeFirstLetter(userChoice);
    const displayComputerChoice = capitalizeFirstLetter(computerChoice);
    const displayResult = capitalizeFirstLetter(result);
    
    resultTextElement.textContent = `You chose ${displayUserChoice}, Computer chose ${displayComputerChoice} → You ${displayResult}`;
    animateResult();
  }
}

function resetGame() {
  playSound(clickSound);
  playerScore = 0;
  computerScore = 0;
  saveScores();
  updateScoreUI();
  resultTextElement.textContent = "Choose your move!";
  setButtonsState(false);
  animateResult();
}

stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
resetBtn.addEventListener("click", resetGame);
