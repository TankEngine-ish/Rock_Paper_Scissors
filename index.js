const options = ["magnus", "alphazero", "coffee"];

function getComputerChoice () { // input from computer //
    const choice = options [Math.floor(Math.random () * options.length )];
    return choice;
    
}




function checkWinner (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }else if (
            (playerSelection == "magnus" && computerSelection == "coffee") || 
            (playerSelection == "coffee" && computerSelection == "alphazero") ||
            (playerSelection == "alphazero" && computerSelection == "magnus")
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



// function game () {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for (let i = 0; i<5; i++) {
//         // const playerSelection = prompt ("Rock Paper Scissors!").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log (playRound (playerSelection, computerSelection));

//         if (checkWinner(playerSelection, computerSelection) == "Player"){
//             scorePlayer++
//         }else if (checkWinner(playerSelection, computerSelection) == "Computer"){
//             scoreComputer++;
        
//         }
//     }
//         console.log ("Game Over");
//         if (scorePlayer > scoreComputer){
//             console.log ("Player is the winner!");
//         }else if(scorePlayer<scoreComputer){
//             console.log ("Computer is the winner!");
//         }else{
//             console.log ("It's a total Tie!");
//         }
// }

// game ()

