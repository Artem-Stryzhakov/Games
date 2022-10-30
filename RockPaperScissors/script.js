const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let computerChoice, userChoice, result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener(
    "click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
}))

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    const list = ["Rock", "Scissors", "Paper"]
    computerChoice = list[randomNumber - 1]
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        result = "You win!"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors"){
        result = "You lose!"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors"){
        result = "You win!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock"){
        result = "You win!"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper"){
        result = "You lose!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        result = "You lose!"
    }

    resultDisplay.innerHTML = result
}