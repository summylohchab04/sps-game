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

function handlePlay(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  console.log(`You chose ${userChoice}, Computer chose ${computerChoice} → You ${result}`);
}

document.getElementById("stoneBtn").addEventListener("click", () => handlePlay("stone"));
document.getElementById("paperBtn").addEventListener("click", () => handlePlay("paper"));
document.getElementById("scissorsBtn").addEventListener("click", () => handlePlay("scissors"));
