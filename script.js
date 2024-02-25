// Global wins, ties, and losses variable declarations
let wins = 0;
let ties = 0;
let losses = 0;

// Wins, ties, and losses counters references
const winsCounter = document.querySelector("#winsCounter");
const tiesCounter = document.querySelector("#tiesCounter");
const lossesCounter = document.querySelector("#lossesCounter");

// Buttons reference
const buttons = document.querySelectorAll("button");

// Rock paper scissors game
for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        // User choice
        let userChoice = event.target.id;
        // Computer choice
        let computerChoice = Math.floor(Math.random() * 3);

        // Converts computerChoice (a number) into a string
        if (computerChoice === 1) {
            computerChoice = "rock";
        } else if (computerChoice === 2) {
            computerChoice = "paper";
        } else  {
            computerChoice = "scissors";
        }

        // Comparisons
        if (userChoice === computerChoice) {
            ties++;
        } else if (userChoice === "rock" && computerChoice === "scissors") {
            wins++;
        } else if (userChoice === "paper" && computerChoice === "rock") {
            wins++;
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            wins++;
        } else {
            losses++;
        }

        // Updates wins, ties, and losses counters
        winsCounter.textContent = "Wins: " + wins;
        tiesCounter.textContent = "Ties: " + ties;
        lossesCounter.textContent = "Losses: " + losses;
    })
}

