//start coding bro
//Set variables
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let numberGames = 5;

//Function simulating computer play: randomly return "Rock", "Paper", or "Scissors".
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  // console.log(randomNum);
  if (randomNum === 0) {
    computerSelection = "Rock";
  }
  if (randomNum === 1) {
    computerSelection = "Paper";
  }
  if (randomNum === 2) {
    computerSelection = "Scissors";
  }
}

//Function to play a round of RPS.
function playRound() {
  playerChoice();
  computerPlay();
  gamesPlayed += 1;

//game logic
  if (playerSelection == computerSelection) {

    alert("You are tied!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore += 1;

    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore += 1;

    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

//function to play # games
function game () {
  for (i = 1; i <= numberGames; i++) {
    playRound();
    // console.log(playRound());
    // console.log(gamesPlayed);
    // console.log(playerScore);
    // console.log(computerScore);
  }

  return winLogic();
}

function winLogic() {
  if (playerScore > computerScore) {
    return `After ${gamesPlayed} rounds... You have won!`;
  } else if (playerScore < computerScore) {
    return `After ${gamesPlayed} rounds... You have lost!`;
  } else {
    return `After ${gamesPlayed} rounds... You have a tie game!`;
  }
}

//Start Function
function playerChoice() {
  playerSelection = prompt("Type Rock, Paper, or Scissors", "Type here...")

  //sanitize playerSelection
  let playerFirstLet = playerSelection[0].toUpperCase();
  let playerRemainLet = playerSelection.slice(1).toLowerCase();
  let cleanPlayerSelection = playerFirstLet + playerRemainLet;
  playerSelection = cleanPlayerSelection;

  //Make sure selection is valid
  if (playerSelection === "Rock" 
  || playerSelection === "Paper" 
  || playerSelection === "Scissors") {

    return;
  } else {

    alert("Invalid selection... Try Again!");
    playerChoice();
  }
}

alert(game());



