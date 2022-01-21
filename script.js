//start coding bro
//Set variables including game counters, selections.
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let numberGames = 5;

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
  computer.textContent = (`${computerSelection}`);
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
  player.textContent = (`${playerSelection}`)
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

function winLogic() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have won!`;
  } else if (playerScore < computerScore) {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have lost!`;
  } else {
    resultDisplay.textContent = `After ${gamesPlayed} rounds... You have a tie game!`;
  }

  resetButton.classList.remove('hidden');
}

function resetGame() {
  playerSelection = "";
  playerDisplay.textContent = "Your move";
  computerSelection = "";
  computerDisplay.textContent = "";
  playerScore = 0;
  playerScoreDisplay.textContent = 0;
  computerScore = 0;
  computerScoreDisplay.textContent = 0;
  gamesPlayed = 0;
  roundCounterDisplay.textContent = 0;
  numberGames = 5;
  resultDisplay.textContent = "Result"

  resetButton.classList.add('hidden');
}

//buttons setup
const button = document.querySelectorAll('.button');
button.forEach(button => button.addEventListener('click', buttonClicked));
button.forEach(button => button.addEventListener("transitionend", transitionEnd))
const resetButton = document.querySelector('#reset')

function buttonClicked (e) {
  let id = e.target.id;
  
  const selectedButton = document.querySelector(`#${id}`);
  selectedButton.classList.add("playing");
  
  if (id === "reset") {
    resetGame();
    return;
  }
  
  if (gamesPlayed < numberGames) {
    playRound(id);
  }
   
}

function transitionEnd (e) {
  this.classList.remove("playing");
}

//Div Displays
const roundCounterDisplay = document.querySelector('#round-counter');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const resultDisplay = document.querySelector('#result');

