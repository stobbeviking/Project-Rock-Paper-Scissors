

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3)
  const kies = choices[choice];
  return kies

}

function getHumanChoice() {
  const choice = prompt("Choose your weapon: rock, paper, scissors").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice
  } else {
    alert("Not on of the options, try again");
  }

}


function playRound() {

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  let humanwins = "You win!";
  let computerwins = "You lose!";
  let TIEREDO = "Its a TIE";


  if (humanSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log(humanwins);
      return 0;
    } else if (computerSelection === "paper") {
      console.log(computerwins);
      return 2;
    } else if (computerSelection === "rock") {
      console.log(TIEREDO);
      return 1
    }
  } else if (humanSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log(computerwins);
      return 2;
    } else if (computerSelection === "paper") {
      console.log(TIEREDO);
      return 1;
    } else if (computerSelection === "rock") {
      console.log(humanwins);
      return 0;
    }
  } else if (humanSelection === "scissors") {
    if (computerSelection === "scissors") {
      console.log(TIEREDO);
      return 1;
    } else if (computerSelection === "paper") {
      console.log(humanwins);
      return 0;
    } else if (computerSelection === "rock") {
      console.log(computerwins);
      return 2;
    }
  }
}
let humanScore = 0;
let computerScore = 0;

for (let round = 0; round <= 4; round++) {
  const winner = playRound();
  if (winner === 0) {
    humanScore++;
  } else if (winner === 2) {
    computerScore++;
  }
}
console.log(`Human Score: ${humanScore}`)
console.log(` Computer Score: ${computerScore}`)

if (humanScore > computerScore) {
  console.log("YOU HAVE BEATEN THE COMPUTER!")
} else if (humanScore < computerScore) {
  console.log("BETTER LUCK NEXT TIME , YOU LOSE!")
} else {
  console.log("ITS A TIE")
}




/*
computer choice
create fuction getcmputerchoice
return value

*/

// rockMap = [
//   [1, 0, 2],
//   [2, 1, 0],
//   [0, 2, 1]
// ];

// function transform(move) {
//   if (move === 'rock') {
//     return 0;
//   } else if (move === 'paper') {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// function whoWins(player, computer) {
//   return rockMap[transform(player)][transform(computer)]
// }

// result = whoWins(playerselection, computerselection)


/*human choice
create prompt choices
if
else
return value
*/
// your code here!
/*
  if (humanselection = "Rock" && computerselection = "Scissors"){
  consolelog ('Human Wins!');
  }
      if (humanselection = "Rock" && computerselection = "Paper"){
      consollog ('Computer wins!');
  }

          if (humanselection = "Rock" && computerselection = "Rock"){
          consolelog ('TIE, REDO ROUND!');
          }
*/
/*
function Game() {
  let computerScore = 0;
  let humanScore = 0;

  if (playRound === "Computer wins!") {
    computerScore++;
  }
  else (playRound === "You win!")
  humanScore++;

  if (computerScore <= 5 || computerScore >= 3) {
    console.log('Better luck next time looser, you lost!')
  } else (humanScore <= 5 || humanScore >= 3); {
    console.log('YOU WIN, YOU HAVE BESTED THE COMPUTER!')
  }
    */









/*
If Human chose Rock and Pc chose Rock
Tie, redo round
If human chose paper and pc chose rock
Human wins
If Human chose scissors and pc chose rock
Pc wins

If Pc chose Rock and human chose Rock
Tie, redo round
If Pc chose Paper and human chose Rock
Pc wins
If Pc chose scissors and human chose Rock
Human wins

If Human chose Rock and Pc chose Paper
Pc wins
If Human chose Paper and PC chose Paper
Tie, redo round
If Human chose scissors and Pc chose paper
Human wins

If Pc chose Rock and Human chose Papaer
Human wins
If Pc chose Paper and humna chose Paper 
Tie, redo round
If Pc chose scissors and Human chose Paper
Pc wins

If Human chose Rock and Pc chose Scissors
Human wins
If Human chose Paper and Pc chose Scissors
Pc wins
If Human chose Scissors and Pc chose Scissors
Tie, redo round

If Pc chose Rock and Human chose Scissors
Pc wins
If Pc chose Paper and Human chose Scissors
Human wins
If Pc chose Scisssors and Human chose Scissors
Tie, redo round */

