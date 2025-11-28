function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3)
  const finalChoice = choices[choice];

  return finalChoice
}

let humanScore = 0;
let computerScore = 0;

function play(humanSelection) {
  const computerSelection = getComputerChoice();

  console.log(`You chose: ${humanSelection}`);
  document.getElementById("humanChose").innerHTML = ` ${humanSelection}`;

  console.log(`Computer chose: ${computerSelection}`);
  document.getElementById("computerChose").innerHTML = ` ${computerSelection}`;

  let humanWins = "You win!";
  let computerWins = "You lose!";
  let tieRedo = "Its a TIE";
  let winner = "";

  if (humanSelection === "rock") {
    if (computerSelection === "scissors") {
      winner = humanWins;
      humanScore++
    } else if (computerSelection === "paper") {
      winner = computerWins;
      computerScore++
    } else if (computerSelection === "rock") {
      winner = tieRedo;
    }
  } else if (humanSelection === "paper") {
    if (computerSelection === "scissors") {
      winner = computerWins;
      computerScore++
    } else if (computerSelection === "paper") {
      winner = TI;
    } else if (computerSelection === "rock") {
      winner = humanWins;
      humanScore++
    }
  } else if (humanSelection === "scissors") {
    if (computerSelection === "scissors") {
      winner = TIEREDO;
    } else if (computerSelection === "paper") {
      winner = humanWins;
      humanScore++
    } else if (computerSelection === "rock") {
      winner = computerWins;
      computerScore++
    }
  }

  document.getElementById("winMessage").innerHTML = winner;
  document.getElementById("playerScore")
    .innerHTML = humanScore;
  document.getElementById("computerScore")
    .innerHTML = computerScore;

  if (computerScore >= 3) {
    console.log('Better luck next time looser, you lost!')
    document.getElementById("roundWinner").innerHTML = "Better luck next time looser, you lost!";
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore >= 3) {
    console.log('YOU WIN, YOU HAVE BESTED THE COMPUTER!');
    document.getElementById("roundWinner").innerHTML = "YOU WIN, YOU HAVE BESTED THE COMPUTER!";
    humanScore = 0;
    computerScore = 0;
  } else {
    document.getElementById("roundWinner").innerHTML = "";
  }
}






/*
function getHumanChoice() {
  const choice = prompt("Choose your weapon: rock, paper, scissors").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice
  } else {
    alert("Not on of the options, try again");
  }

}
*/
// }
// console.log(`Human Score: ${humanScore}`)
// console.log(` Computer Score: ${computerScore}`)

// if (humanScore > computerScore) {
//   console.log("YOU HAVE BEATEN THE COMPUTER!")
// } else if (humanScore < computerScore) {
//   console.log("BETTER LUCK NEXT TIME , YOU LOSE!")
// } else {
//   console.log("ITS A TIE")
// }
/*


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

  if (play === "You lose!") {
    computerScore++;
  }
  else (play === "You win!")
  humanScore++;

  if (computerScore <= 5 || computerScore >= 3) {
    console.log('Better luck next time looser, you lost!')
  } else (humanScore <= 5 || humanScore >= 3) {
    console.log('YOU WIN, YOU HAVE BESTED THE COMPUTER!')
  }
    */

