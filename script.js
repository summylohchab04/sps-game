// Initialize scores from LocalStorage or 0
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

const choices = ["stone", "paper", "scissors"];

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

const modal = document.getElementById("gameOverModal");
const modalResultText = document.getElementById("modalResultText");

let isThinking = false;

// Initial UI update
updateScoreUI();
checkGameEndInit();

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
  if (userChoice === computerChoice) return "draw";
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

function triggerResultEffect(effectClass) {
  resultTextElement.className = ""; // clear all classes
  void resultTextElement.offsetWidth; // trigger reflow
  resultTextElement.classList.add(effectClass);
}

function animateScore(element) {
  element.classList.remove("score-pop");
  void element.offsetWidth;
  element.classList.add("score-pop");
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

function showModal(message) {
  modalResultText.textContent = message;
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

function checkGameEndInit() {
  if (playerScore >= 5 || computerScore >= 5) {
    setButtonsState(true);
    if (playerScore >= 5) showModal("🎉 You Won!");
    else showModal("💻 Computer Won!");
  }
}

function checkGameEnd() {
  if (playerScore >= 5 || computerScore >= 5) {
    setButtonsState(true);
    setTimeout(() => {
      if (playerScore >= 5) {
        playSound(winSound);
        showModal("🎉 You Won!");
      } else {
        playSound(loseSound);
        showModal("💻 Computer Won!");
      }
    }, 600); // Wait a bit before showing modal
    return true;
  }
  return false;
}

function playGame(userChoice) {
  if (playerScore >= 5 || computerScore >= 5 || isThinking) return;
  
  playSound(clickSound);
  isThinking = true;
  setButtonsState(true);
  
  // Computer thinking effect
  resultTextElement.textContent = "Computer is thinking...";
  triggerResultEffect("thinking");

  setTimeout(() => {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    
    let effectClass = "draw-effect";
    if (result === "win") {
      playerScore++;
      playSound(winSound);
      animateScore(playerScoreElement);
      effectClass = "win-effect";
    } else if (result === "lose") {
      computerScore++;
      playSound(loseSound);
      animateScore(computerScoreElement);
      effectClass = "lose-effect";
    }
    
    saveScores();
    updateScoreUI();
    
    const displayUserChoice = capitalizeFirstLetter(userChoice);
    const displayComputerChoice = capitalizeFirstLetter(computerChoice);
    const displayResult = capitalizeFirstLetter(result);
    
    resultTextElement.textContent = `You chose ${displayUserChoice}, Computer chose ${displayComputerChoice} → You ${displayResult}`;
    triggerResultEffect(effectClass);

    isThinking = false;
    if (!checkGameEnd()) {
      setButtonsState(false);
    }
  }, 500);
}

function resetGame() {
  playSound(clickSound);
  playerScore = 0;
  computerScore = 0;
  saveScores();
  updateScoreUI();
  
  resultTextElement.textContent = "Choose your move!";
  resultTextElement.className = "";
  
  setButtonsState(false);
  hideModal();
}

stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
resetBtn.addEventListener("click", resetGame);
