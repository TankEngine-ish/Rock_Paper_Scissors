const userScore = 0;
const compScore = 0;
const playerScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreLabel_div = document.querySelector(".scoreLabel");
const resultsLabel_div = document.querySelector(".resultsLabel");
const magnus_button = document.getElementById("Magnus");
const alphazero_button = document.getElementById("Alphazero");
const coffee_button = document.getElementById("Coffee");

// This is caching the DOM (storing these variables for future use).


function getComputerChoice () { 
    const options = ["Magnus", "Alphazero", "Coffee"];
    const choices = options [Math.floor(Math.random () * 3)];
    return choices;
    
}





function game (userChoice) {
    const computerChoice = getComputerChoice();

}


function main (){

magnus_button.addEventListener('click', function(){
    game("Magnus");
})

alphazero_button .addEventListener('click', function(){
    game("Alphazero");
})

coffee_button .addEventListener('click', function(){
    game("Coffee");
})
}

main ();































// const charButtons = document.querySelectorAll(".btn")
// resetBtn.addEventListener('click',() => location.reload());


function checkWinner (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a Draw!";
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
        return "It's a Tie!"
    }else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else{ 
        return `You lost to your computer! ${computerSelection} beats ${playerSelection}`
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

