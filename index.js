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
    resultsLabel_p.innerHTML = userChoice + "(You)" + " beats " + computerChoice + "(Computer)" + ". You Win! :)";
}

function draw (userChoice, computerChoice) {
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    resultsLabel_p.innerHTML = userChoice + "(You)" + " equals " + computerChoice + "(Computer)" +  ". Zero points for each. :/";  
}

function loss(userChoice, computerChoice){
    compScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    resultsLabel_p.innerHTML = computerChoice + "(Computer)" + " beats " + userChoice + "(You)" + ". You Lost! :(";
}
 

function game () {
    if (userScore === 5){
        resultsLabel_p.innerHTML = "You won five rounds! Victory is yours!"
        document.getElementById ("Magnus").disabled = true;
        document.getElementById ("Alphazero").disabled = true;
        document.getElementById ("Coffee").disabled = true;
    }else if (compScore === 5) {
        resultsLabel_p.innerHTML = "You lost to the computer! Restart to try again!"
        document.getElementById ("Magnus").disabled = true;
        document.getElementById ("Alphazero").disabled = true;
        document.getElementById ("Coffee").disabled = true;
    }
// these selectors disable the buttons once we have a winner
 }
 game (); 
 

function playRound (userChoice) {
    const computerChoice = getComputerChoice();

if  ((userChoice == "Magnus" && computerChoice== "Coffee") || 
    (userChoice == "Coffee" && computerChoice== "Alphazero") ||
    (userChoice == "Alphazero" && computerChoice == "Magnus")) {
    
    win(userChoice, computerChoice);

}else if (userChoice == computerChoice)

{
    draw(userChoice, computerChoice);

}else{
    loss(userChoice, computerChoice);
}

game();  
}


function main (){

magnus_button.addEventListener('click', function(){
    playRound("Magnus");
})

alphazero_button .addEventListener('click', function(){
    playRound("Alphazero");
})

coffee_button .addEventListener('click', function(){
    playRound("Coffee");
})
}

main ();


const reset_button = document.getElementById("reset");
const refreshPage = () => {
    location.reload();
}
  
reset_button.addEventListener('click', refreshPage)







//  OLD JS BELOW--
 

// function rounds () {
//     for (let i = 0; i<5; i++) {
//     }
//         if (userScore > compScore){
        

//         }else if(userScore < compScore){
//         return resultsLabel_p.innerHTML = "You lost!"
// }
// }

// rounds ();


   // if (checkWinner(playerSelection, computerSelection) == "Player"){
        //     scorePlayer++
        // }else if (checkWinner(playerSelection, computerSelection) == "Computer"){
        //     scoreComputer++;
        
        // }

// const winnerResults ={
//     computer: ["You Lost the game to a computer!", 'red'],
//     player: ["You Win the game!!!!", 'green'],
//     tie: ["The game is a Tie!", 'blue']
//   }






