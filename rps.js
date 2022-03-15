function computerPlay() {
    let possibleMoves = ["rock", "paper", "scissors"];
    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
}

const computerSelection = computerPlay();
let choice = prompt("Rock, paper, or scissors?", "rock");
const playerSelection = choice.toLowerCase();

function playRound(playerOne, playerTwo) {
    if(playerOne === playerTwo) {
        console.log("Draw!");
    } 
    else if(playerOne === "rock" && playerTwo === "scissors") {
        console.log("CPU chooses rock. You lose!");
    }
    else if(playerOne === "rock" && playerTwo === "paper") {
        console.log("CPU chooses rock. You win!");
    }
    else if(playerOne === "paper" && playerTwo === "rock") {
        console.log("CPU chooses paper. You lose!");
    }
    else if(playerOne === "paper" && playerTwo === "scissors") {
        console.log("CPU chooses paper. You win!");
    }
    else if(playerOne === "scissors" && playerTwo === "paper") {
        console.log("CPU chooses scissors. You lose!");
    }
    else if(playerOne === "scissors" && playerTwo === "rock") {
        console.log("CPU chooses scissors. You win");
    }
}

console.log(playRound(computerSelection, playerSelection));