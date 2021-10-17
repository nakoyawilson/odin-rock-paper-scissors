function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return `Computer chose ${computerSelection}. It's a tie!`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return `Computer chose ${computerSelection}. You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer chose ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: Rock, Paper or Scissors?")
        const results = playRound(playerSelection, computerPlay());
        console.log(results)
        if (results.includes("You Win!")) {
            playerWins++
        } else if (results.includes("You Lose!")) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("Player Wins!");
    } else if (playerWins < computerWins) {
        console.log("Computer Wins");
    } else {
        console.log("It's a tie!");
    }
}

game();