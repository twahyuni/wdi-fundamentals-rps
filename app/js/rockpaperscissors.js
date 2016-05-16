////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
      winner = 'tie';
    } else if (playerMove == 'rock') {
      switch (computerMove) {
        case "scissors":
          winner = 'player';
          break;
        case "paper":
          winner = 'computer';
          break;
      }
    } else if (playerMove == 'scissors') {
      switch (computerMove) {
        case "paper":
          winner = 'player';
          break;
        case "rock":
          winner = 'computer';
          break;
      }
    } else if (playerMove == 'paper') {
      switch (computerMove) {
        case "rock":
          winner = 'player';
          break;
        case "scissors":
          winner = 'computer';
          break;
        }
    } else {
      console.log("try again.");
    }
    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var champion = getWinner(playerMove, computerMove);
      console.log("You chose " + playerMove.toUpperCase() + " and Computer chose " + computerMove.toUpperCase() + ".");

      if (champion === "player") {
        playerWins ++;
      } else if (champion === "computer") {
        computerWins ++;
      }
      console.log("The winner is ..." + champion.toUpperCase() + ". Player: " + playerWins + ", Computer: " + computerWins);
    }
    console.log("Thank you for playing!");
    return [playerWins, computerWins];
}

playTo(5);
