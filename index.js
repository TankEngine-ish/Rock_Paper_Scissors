const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
    const choice = options [Math.floor(Math.random () * options.length )];
    return choice
    
    }


function checkWinner (playerSelection, computerSelection) {
        if (playerSelection == computerSelection){
        return "Tie";
    }
}

function playRound (playerSelection, computerSelection)  {
    
    
}