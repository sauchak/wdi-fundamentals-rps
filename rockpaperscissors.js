////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
   
    return move || getInput();
}

function getComputerMove(move) {
   
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
  
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "tie";
        }
        else if (computerMove === "paper") {
            winner = "computer";
        }
        else if (computerMove === "scissors") {
            winner = "player";
        }
    }
    if (playerMove === "paper") { 
        if (computerMove === "rock") {
            winner = "player";
        }
        else if (computerMove === "paper") {
            winner = "tie";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
    }
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else if (computerMove === "paper") {
            winner = "player";
        }
        else if (computerMove === "scissors") {
            winner = "tie";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove);
        if (winner === "player") {
            console.log("Player selects " + playerMove + " and Computer selects " + computerMove + ". Player wins this round.");
            playerWins += 1;
        } 
        else if (winner === "computer") {
            console.log("Player selects " + playerMove + " and Computer selects " + computerMove + ". Computer wins this round.");
            computerWins += 1;
        } 
        else if (winner === "tie") {
            console.log("This round was a tie.");
        }
        console.log("The score is now " + playerWins + " to " + computerWins + ".");
    }
    return [playerWins, computerWins];
}

