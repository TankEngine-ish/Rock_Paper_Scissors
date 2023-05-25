const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    const choice = options [Math.floor(Math.random () * options.length )];
    return choice
    
}


function checkWinner (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }else if (
            (playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Paper") ||
            (playerSelection == "Paper" && computerSelection == "Rock")
    ){
        return "Player";
    }else {
        return "Computer";
    }
} 

function playRound (playerSelection, computerSelection)  {
    const result = checkWinner (playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie"
    }else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else{ 
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

    // const playerSelection = "Rock";
    // const computerSelection = getComputerChoice ();
    // console.log (playRound(playerSelection, computerSelection));



function game () {
    for (let i = 0; i<5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log (playRound (playerSelection, computerSelection));
    }
}
game ()