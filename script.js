//start coding bro
//Set variables including game counters, selections.
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let numberGames = 5;
// let tieCounter = 0;

/* Function simulating computer play: randomly selects "Rock", "Paper",
or "Scissors". */
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
  //display computer selection
  computer.textContent = (`Computer plays ${computerSelection}`);
}

//Function to play a round of RPS.
function playRound(id) {
  //store click ID into playerSelection variable
  playerSelection = id;

  // sanitize playerSelection
  let playerFirstLet = playerSelection[0].toUpperCase();
  let playerRemainLet = playerSelection.slice(1).toLowerCase();
  let cleanPlayerSelection = playerFirstLet + playerRemainLet;
  playerSelection = cleanPlayerSelection;

  //display player selection
  player.textContent = (`Player plays ${playerSelection}`)
  computerPlay();

  gamesPlayed += 1;
  roundCounterDisplay.textContent = gamesPlayed;

  roundLogic();

  if (gamesPlayed >= 5) {
    winLogic();
  }
}

//Logic for single round of game
function roundLogic() {
  if (playerSelection == computerSelection) {
    // tieCounter += 1;
    // tieCounterDisplay.textContent = tieCounter;
    resultDisplay.textContent = ("You are tied!");

  } else if (playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
    resultDisplay.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
  
  } else {
    computerScore += 1;
    computerScoreDisplay.textContent = computerScore;

    resultDisplay.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

// //function to play selected number of games
// function game () {
//   // for (i = 1; i <= numberGames; i++) {
//     playRound();
//   // }

//   return winLogic();
// }

//logic function to announce winner at end of all rounds.
function winLogic() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have won!`;
  } else if (playerScore < computerScore) {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have lost!`;
  } else {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have a tie game!`;
  }
}

//User selection function
// function playerChoice(id) {
//   playerSelection = id;
//   console.log(`Player selects ${playerSelection}`);

  // if (playerSelection === null) {
  //   playerChoice();
  // }

  // //confirm user selection is valid
  // if (playerSelection === "Rock" 
  // || playerSelection === "Paper" 
  // || playerSelection === "Scissors") {

  //   return;
  // } else {

  //   alert("Invalid selection... Try Again!");
  //   playerChoice();
  // }
// }

//initiate game start via alert upon loading.
// alert(game());

//buttons setup
const button = document.querySelectorAll('.button');
button.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked (e) {
  let id = e.target.id;
  
  if (gamesPlayed < numberGames) {
    playRound(id);
  }
}

//Div Displays
const roundCounterDisplay = document.querySelector('#round-counter');
// const tieCounterDisplay = document.querySelector('#tie-counter');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const resultDisplay = document.querySelector('#result');

