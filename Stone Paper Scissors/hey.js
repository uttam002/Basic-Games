let playerScore = 0;
let computerScore = 0;

window.onload = function() {
  // On click event for rock choice
  document
    .getElementsByClassName("rock")[0]
    .addEventListener("click", function(event) {
      compareChoices("rock", randomChoice());
      testWinCondition();
      updateScores();
    });
  // On click event for paper choice
  document
    .getElementsByClassName("paper")[0]
    .addEventListener("click", function(event) {
      compareChoices("paper", randomChoice());
      testWinCondition();
      updateScores();
    });
  document
    // On click event for scissors choice
    .getElementsByClassName("scissors")[0]
    .addEventListener("click", function(event) {
      compareChoices("scissors", randomChoice());
      testWinCondition();
      updateScores();
    });
  document
    // On click event for scissors choice
    .getElementsByClassName("replay-button")[0]
    .addEventListener("click", function(event) {
      restartGame();
    });
};

// Create a random choice for the computer opponent
function randomChoice() {
  let choice = Math.floor(Math.random() * (4 - 1) + 1);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function compareChoices(playerValue, computerValue) {
  console.log(playerValue, computerValue);
  // Compare choices between the player and computer
  if (playerValue === "rock") {
    if (computerValue === "scissors") {
      playerScore++;
    } else if (computerValue === "paper") {
      computerScore++;
    }
  } else if (playerValue === "paper") {
    if (computerValue === "rock") {
      playerScore++;
    } else if (computerValue === "scissors") {
      computerScore++;
    }
  } else {
    if (computerValue === "rock") {
      playerScore++;
    } else if (computerValue === "scissors") {
      computerScore++;
    }
  }
}

function testWinCondition() {
  // Test for win conditions and set appropriate messages
  if (playerScore == 5 || computerScore == 5) {
    document.getElementById("result-message").style.visibility = "visible";
    document.getElementById("player-score").style.visibility = "hidden";
    document.getElementById("computer-score").style.visibility = "hidden";
    document.getElementsByClassName("replay-button")[0].style.visibility =
      "visible";
    let scoreText = document.getElementsByClassName("score-text");
    for (let i = 0; i < scoreText.length; i++) {
      scoreText[i].style.visibility = "hidden";
    }
  }

  if (playerScore == 5) {
    document.getElementById("result-message").innerHTML =
      "Congratulations! You win!";
  } else if (computerScore == 5) {
    document.getElementById("result-message").innerHTML =
      "Better luck next time!";
  }
}

function updateScores() {
  document.getElementById("player-score").innerHTML = "" + playerScore;
  document.getElementById("computer-score").innerHTML = "" + computerScore;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").innerHTML = "0";
  document.getElementById("computer-score").innerHTML = "0";
  document.getElementById("player-score").style.visibility = "visible";
  document.getElementById("computer-score").style.visibility = "visible";
  document.getElementById("result-message").style.visibility = "hidden";
  document.getElementsByClassName("replay-button")[0].style.visibility =
    "hidden";

  let scoreText = document.getElementsByClassName("score-text");
  for (let i = 0; i < scoreText.length; i++) {
    scoreText[i].style.visibility = "visible";
  }
}
