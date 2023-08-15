let userScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreLabel_div = document.querySelector(".scoreLabel");
const resultsLabel_p = document.querySelector(".resultsLabel > p");
const magnus_button = document.getElementById("Magnus");
const alphazero_button = document.getElementById("Alphazero");
const coffee_button = document.getElementById("Coffee");


// This is caching the DOM (storing these variables for future use).


function getComputerChoice () { 
    const options = ["Magnus", "Alphazero", "Coffee"];
    const choices = options [Math.floor(Math.random () * 3)];
    return choices;
    
}

function win(userChoice, computerChoice){
    userScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    resultsLabel_p.innerHTML = userChoice + " beats " + computerChoice + ". You Win! :)";
}



function draw (userChoice, computerChoice) {
    
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    resultsLabel_p.innerHTML = userChoice + " equals " + computerChoice + ". Zero points for each. :/";
    
}



function loss(userChoice, computerChoice){
    compScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    resultsLabel_p.innerHTML = computerChoice + " beats " + userChoice + ". You Lost! :(";

}
   


function game (userChoice) {
    const computerChoice = getComputerChoice();

if  ((userChoice == "Magnus" && computerChoice== "Coffee") || 
    (userChoice == "Coffee" && computerChoice== "Alphazero") ||
    (userChoice == "Alphazero" && computerChoice == "Magnus")) {
    
    win(userChoice, computerChoice);

}   else if (userChoice == computerChoice)

{
    draw(userChoice, computerChoice);

} else {
    loss(userChoice, computerChoice);
}
    
    
}





// const winnerResults ={
//     computer: ["You Lost the game to a computer!", 'red'],
//     player: ["You Win the game!!!!", 'green'],
//     tie: ["The game is a Tie!", 'blue']
//   }






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














const reset_button = document.getElementById("reset");
const refreshPage = () => {
    location.reload();
  }
  
 reset_button.addEventListener('click', refreshPage)
























 

// function rounds () {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for (let i = 0; i<5; i++) {
      

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

// rounds ();

