
let playerSelection = prompt('Rock, Paper or Scissors!', 'rock');
let player_score = 0;
let computer_score = 0;

function computerSelection() {
    let computerSelectionOptions = ['rock', 'paper', 'scissors'];
    return computerSelectionOptions[Math.floor(Math.random() * computerSelectionOptions.length)];  
}



let computerPlay = computerSelection();

console.log(computerPlay)


function playRound(playerselection, computerplay) {
    if (playerSelection.toLowerCase() == 'rock' && computerPlay == 'rock') {
        return 'it is a draw!'; 
    } else if (playerSelection.toLowerCase() == 'rock' && computerPlay == 'paper') {
        return 'sorry you lost!'; 
    } else if (playerSelection.toLowerCase() == 'rock' && computerPlay == 'scissors') {
        return 'Congratulations you won!'; 
    } else if (playerSelection.toLowerCase() == 'paper' && computerPlay == 'rock') {
        return 'Congratulations you won!'; 
    } else if (playerSelection.toLowerCase() == 'paper' && computerPlay == 'paper') {
        return 'it is a draw!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerPlay == 'scissors') {
        return 'sorry you lost!'; 
    } else if (playerSelection.toLowerCase() == 'scissors' && computerPlay == 'rock') {
        return 'sorry you lost!'; 
    } else if (playerSelection.toLowerCase() == 'scissors' && computerPlay == 'paper') {
        return 'Congratulations you won!'; 
    } else if (playerSelection.toLowerCase() == 'scissors' && computerPlay == 'scissors') {
        return 'it is a draw!';
    }
    
}

console.log(playRound())

function keepScore () {
    if (playRound() == 'Congratulations you won!') {
        return player_score +1 + '-' + computer_score;
    } else if (playRound() == 'sorry you lost!') {
        return player_score + '-' + computer_score + 1 ;
    } else if (playRound() == 'it is a draw!') {
        return 'play again!'
    }
}

console.log(keepScore())

