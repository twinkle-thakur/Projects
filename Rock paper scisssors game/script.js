const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    playGame(playerChoice, computerChoice);
  });
});

function playGame(player, computer) {
  if (player === computer) {
    result.textContent = `It's a draw! You both chose ${player}`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    result.textContent = `You win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computer} beats ${player}`;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}
