let playerScore = 0;
let cpuScore = 0;
let result;

const options = document.querySelectorAll('.options');

const resultDiv = document.querySelector('#result');
const playerSpan = document.querySelector('#playerScore');
const cpuSpan = document.querySelector('#cpuScore');

function computerPlay() {
    let possibleMoves = ["rock", "paper", "scissors"];
    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
}

options.forEach((option) => {
    option.addEventListener('click', () => {
        let clicked = option.textContent;
        let playerChoice = clicked.toLowerCase();
        let cpuChoice = computerPlay();

        playRound(playerChoice, cpuChoice);
        roundWinner();
        gameWinner();
    });
});

function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        result = "draw";
    } 
    else if(computerSelection === "rock" && playerSelection === "scissors") {
       result = "cpu";
    }
    else if(computerSelection === "rock" && playerSelection === "paper") {
        result = "player";
    }
    else if(computerSelection === "paper" && playerSelection === "rock") {
        result = "cpu";
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        result = "player";
    }
    else if(computerSelection === "scissors" && playerSelection === "paper") {
        result = "cpu";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        result = "player";
    }

    return result;
}

function roundWinner() {
    if(result === "draw") {
        resultDiv.textContent = "Round was a draw! No points given.";
    }
    else if (result === "player") {
        resultDiv.textContent = "You win this round!";
        playerScore++;
        playerSpan.textContent = playerScore;
    }
    else {
        resultDiv.textContent = "CPU wins this round!";
        cpuScore++;
        cpuSpan.textContent =  cpuScore;
    }
}

function gameWinner() {
    if(playerScore === 5) {
        resultDiv.textContent = "First to five. You win!";
        resetGame();
    }
    else if(cpuScore === 5) {
        resultDiv.textContent = "CPU was first to five. You lose! :(";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    playerSpan.textContent = 0;
    cpuSpan.textContent = 0;
}