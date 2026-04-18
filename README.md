________________________________________
📌 Project Overview

The Stone Paper Scissors Web Game is a fully interactive browser-based game built using HTML, CSS, and JavaScript. It allows users to play against a computer opponent with real-time feedback, smooth animations, and a structured scoring system.

🎯 Purpose

•	Practice JavaScript game logic
•	Understand DOM manipulation & event handling
•	Build a modern UI using CSS animations
•	Learn project deployment (Netlify)

❓ Problem it solves

•	Demonstrates how real-world interactive web apps work
•	Helps beginners understand state management + UI updates

👥 Who can use it

•	Beginners learning frontend
•	Students building projects
•	Anyone exploring JavaScript games
________________________________________
🔗 Live Demo 

Resource	Link
🌐 Live App	https://sps-game1.netlify.app/

________________________________________
✨ Features

🎮 Gameplay

•	Classic Stone 🪨 Paper 📄 Scissors ✂️ mechanics
•	Player vs Computer (random AI)
•	Instant result display

📊 Score System

•	Live tracking of player vs computer score
•	Automatic updates after each round

🏁 Best-of-5 Mode

•	Game ends when a player reaches 5 points
•	Displays final winner

🔄 Reset Functionality

•	Restart game instantly
•	Reset scores and UI

🎨 UI & Animations

•	Glassmorphism-inspired design
•	Animated gradient background
•	Hover + click effects
•	Smooth transitions

📱 Responsive Design

•	Works on mobile, tablet, and desktop

💾 Local Storage

•	Saves scores across page reloads
________________________________________
🛠️ Tech Stack

Technology	Usage
HTML5	Structure
CSS3	Styling, animations, responsiveness
JavaScript	Game logic, DOM updates
________________________________________
📂 Project Structure

sps-game/
│── index.html        # UI structure
│── style.css         # Design & animations
│── script.js         # Game logic
│── assets/           # Optional media files
________________________________________
🔄 How It Works (Code Flow)

User clicks button
      ↓
Event listener triggers
      ↓
playGame(userChoice)
      ↓
getComputerChoice()
      ↓
getResult()
      ↓
Update UI (result text)
      ↓
Update score
      ↓
Save to localStorage
________________________________________
🧠 Core Logic (Simplified)

getComputerChoice()
const choices = ["stone", "paper", "scissors"];
return choices[Math.floor(Math.random() * 3)];
getResult()
if (user === comp) return "draw";
if (
  (user === "stone" && comp === "scissors") ||
  (user === "paper" && comp === "stone") ||
  (user === "scissors" && comp === "paper")
) return "win";
else return "lose";
playGame()
- Take user input
- Generate computer choice
- Calculate result
- Update UI + score
________________________________________
🔁 State Management

•	Variables:
let playerScore = 0;
let computerScore = 0;
•	Game state controlled by:
o	Score condition (max = 5)
o	Button enable/disable
________________________________________
🎨 UI/UX Design

Glassmorphism
•	Transparent card
•	Blur effect
•	Soft shadows
Animations
•	Button hover → scale
•	Result text → smooth transitions
Responsive Layout
•	Flexbox layout
•	Mobile-friendly
________________________________________
💾 Local Storage

What:
Stores data in browser
Why:
Keep scores after refresh
How:
localStorage.setItem("playerScore", playerScore);
let score = localStorage.getItem("playerScore");
________________________________________
▶️ Installation Guide

git clone https://github.com/summylohchab04/sps-game.git
cd sps-game
Run:
•	Open index.html
OR
•	Use Live Server
________________________________________
🚀 Deployment (Netlify)

Steps:
1.	Push project to GitHub
2.	Connect repo to Netlify
3.	Deploy automatically
________________________________________
📊 Diagrams & Visuals

 <img width="940" height="620" alt="image" src="https://github.com/user-attachments/assets/e4b53455-2c74-4c2e-a29b-b979b72cde63" />
________________________________________
🔁 Game Flow

User → Click → Logic → Result → Score → Display

🧱 Architecture

HTML → Structure
CSS → UI
JS → Logic
________________________________________
📸 Screenshots

<img width="834" height="433" alt="image" src="https://github.com/user-attachments/assets/94166cff-7d5b-4a2e-a5d1-ae380fcc6231" />
<img width="826" height="684" alt="image" src="https://github.com/user-attachments/assets/6543883d-633e-4ff0-96d0-10a00b99410e" />
<img width="863" height="709" alt="image" src="https://github.com/user-attachments/assets/211e1dd5-cbf1-4952-873b-fb27713e63eb" />
<img width="905" height="748" alt="image" src="https://github.com/user-attachments/assets/55621599-b0b3-4bea-b5d9-b7dcc6643168" />
<img width="940" height="756" alt="image" src="https://github.com/user-attachments/assets/80eda46f-3c45-4eb2-9833-5ce4fbad7485" />
________________________________________
🔮 Future Improvements

•	🤖 Smart AI opponent
•	🏆 Leaderboard
•	🌙 Dark mode
•	🎵 Better sound effects
________________________________________
🧠 Learnings

•	DOM manipulation
•	Event handling
•	Game logic building
•	UI animations
•	Responsive design
•	Deployment
________________________________________
🤝 Contribution

1.	Fork the repo
2.	Create branch
3.	Commit changes
4.	Open PR
________________________________________
⭐ Support

If you like this project, give it a ⭐ on GitHub!

