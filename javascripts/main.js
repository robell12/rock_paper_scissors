var choice2 = ' ';
var choices = ["rock", "paper", "scissors"];
var choice1 = computerChoice();
var paperChoice = document.getElementById('paper-choice')
var rockChoice = document.getElementById('rock-choice')
var scissorsChoice = document.getElementById('scissors-choice')
var displayResult = document.getElementById('display-result')
var resetButton = document.getElementById('reset-button')
var wins = 0;
var losses = 0;
var ties = 0;
var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var userTies = document.getElementById('ties');

paperChoice.addEventListener('click', function() {
  choice2 = choices[1]
  display()
})
rockChoice.addEventListener('click', function() {
  choice2 = choices[0]
  display()
})
scissorsChoice.addEventListener('click', function() {
  choice2 = choices[2]
  display()
})
resetButton.addEventListener('click', function() {
  wins = 0;
  losses = 0;
  ties = 0;
  userWins.innerHTML = wins;
  userLosses.innerHTML = losses;
  userTies.innerHTML = ties;
})

function computerChoice() {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

var compare = function(choice1, choice2) {
  if(choice1 === choice2) {
    ++ties
    return "The result is a tie!";
  } else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      ++losses
      return"rock wins";
  } else {
    ++wins
    return"paper wins";
    }
  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      ++losses
      return "paper wins";
    } else {
      ++wins
      return "scissors wins";
    }
  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      ++losses
      return "rock wins";
    } else {
      ++wins
      return "scissors wins";
    }
  }
}

function percentWin(){
  var total = parseFloat((wins / (wins + losses)) * 100).toPrecision(4)
  if (isNaN(total))
   return 0;
  return total;
}

function percentLoss() {
  var total = parseFloat((losses / (wins + losses)) * 100).toPrecision(4)
  if (isNaN(total))
    return 0;
  return total
}
function display() {
  choice1 = computerChoice();
  displayResult.innerText = "You picked: " + choice2.toUpperCase() + ". " + "The computer picked: " + choice1.toUpperCase() + ". " + "So " + compare(choice2, choice1)


  var pwins = percentWin()
  var plosses = percentLoss()
  userWins.innerHTML = "Wins: " + wins + " --- " + pwins + "%";
  userLosses.innerHTML = "Losses: " + losses + " --- " + plosses + "%";
  userTies.innerHTML = "Ties: " + ties;
}
