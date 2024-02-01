const getComputerChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

let playerScore = 0;
let computerScore = 0;

const playRound = (computerChoice, playerSelection) => {
  if (playerSelection === "rock" && computerChoice === "scissor") {
    playerScore++;
    return ` Win! ${playerSelection} beats ${computerChoice}\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    playerScore++;
    return ` Win! ${playerSelection} beats ${computerChoice}\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  } else if (playerSelection === "scissor" && computerChoice === "paper") {
    playerScore++;
    return ` Win! ${playerSelection} beats ${computerChoice}\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  } else if (playerSelection === "scissor" && computerChoice === "scissor") {
    return `It's a Tie\nyour score: ${playerScore}\tcomputer score:${computerScore}`;
  } else if (playerSelection === "paper" && computerChoice === "paper") {
    return `It's a Tie\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  } else if (playerSelection === "rock" && computerChoice === "rock") {
    return `It's a Tie\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  } else {
    computerScore++;
    return ` Lose! ${computerChoice} beats ${playerSelection}\nyour score: ${playerScore}\ncomputer score:${computerScore}`;
  }
};

const playGame = () => {
  const playerSelection = prompt("Enter rock,paper or scissor").toLowerCase();
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    console.log(playRound(computerChoice, playerSelection));
  }
  if (playerScore > computerScore) {
    return `You win! your score is ${playerScore}`
  } else if (playerScore === computerScore) {
    return `Its a Tie! scores are ${playerScore}:${computerScore}`
  }
  else { return `You Lose! computerScore beat you by ${computerScore} : ${playerScore}` }
}

console.log(playGame());

