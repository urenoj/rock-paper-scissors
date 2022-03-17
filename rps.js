let playerScore = 0;
let cpuScore = 0;
let result = "";

function computerPlay() {
    let possibleMoves = ["rock", "paper", "scissors"];
    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
}

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
        console.log("Round is a draw!");
    }
    else if (result === "player") {
        console.log("You win this round!");
        playerScore++;
    }
    else {
        console.log("CPU wins this round!");
        cpuScore++;
    }
}

function gameWinner() {
    if(playerScore === cpuScore) {
        console.log("Tied " + playerScore + " to " + cpuScore + "!");
    }
    else if(playerScore > cpuScore) {
        console.log("Player wins " + playerScore + " rounds to " + cpuScore + "!");
    }
    else { console.log("CPU wins " + cpuScore + " to " + playerScore + "!"); }
}

function game() {
    for(let rounds = 0; rounds < 5; rounds++) {
        const computerSelection = computerPlay();
        let choice = prompt("Rock, paper, or scissors?", "rock");
        const playerSelection = choice.toLowerCase();
    
        playRound(computerSelection, playerSelection);
        roundWinner();
    }
    
    gameWinner();
}

game();