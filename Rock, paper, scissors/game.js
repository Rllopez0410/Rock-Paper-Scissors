// const optbtns = document.querySelectorAll('.optbtn');
// optbtns.forEach(optbtn => optbtn.addEventListener('click', playerChoice));

const arry = ['rock', 'paper', 'scissors'];

// Score counter for both players

let playerScore = 0;
let computerScore = 0;

// Randomized choice generator for computer

let computerChoice = () => {
    return arry[Math.floor(Math.random()* 3)];
};

// Function to declare winner and to increment score based on the conditions

function playRound(playerSelection, computerSelection) {
    // const pS = document.querySelector('.playerscore');
    // const cS = document.querySelector('.cpuscore');
    // const roundStatus = document.querySelector('.roundtext');

    // conditons 

    if ( playerSelection == arry[0] && computerSelection == arry[2] || 
        playerSelection == arry[1] && computerSelection == arry[0] || 
        playerSelection == arry[2] && computerSelection == arry[1]) {
         
        playerScore += 1;
        pS.textContent = `${playerScore}`; 
        roundStatus.innerHTML = "Player wins";
    } 
    
    if (computerSelection == arry[0] && playerSelection == arry[2] || 
        computerSelection == arry[1] && playerSelection == arry[0] || 
        computerSelection == arry[2] && playerSelection == arry[1]) {
         
        computerScore += 1;
        cS.textContent = `${computerScore}`;
        roundStatus.innerHTML = "Computer wins";
    } 
    
    if (playerSelection == arry[0] && computerSelection == arry[0] || 
        playerSelection == arry[1] && computerSelection == arry[1] || 
        playerSelection == arry[2] && computerSelection == arry[2]) {
        
        roundStatus.innerHTML = "Tie";
    } 

}

// function winCon() {
//     if(playerScore == 3 || computerScore == 3) {
//        const resetbtn = document.querySelector('#resetcontainer');
//        const reset = document.querySelector('.reset')
//        const text = document.querySelector('.resettext');
//        resetbtn.classList.add('resetanimation');
//        resetbtn.style.display = "flex";
//        optbtns.forEach(optbtn => optbtn.removeEventListener('click', playerChoice));
//        reset.addEventListener('click', restart);
//        text.textContent = `Player score: ${playerScore} vs Computer score: ${computerScore}`
//     } 
// }

// //This function should reset the score to zero and return the player to the main menu page
// function restart() {
//     location.reload();
// }

// function playerChoice(e) {
//     const cd = Array.from(document.querySelectorAll('.cd'));
//     let choice = e.target.id
        
//     const computerSelection = computerChoice();
//     const playerSelection = choice;
//     console.log(playerSelection, computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(playerScore, computerScore);
//     console.log(winCon())

//     if(playerSelection == arry[0]) cd[0].innerHTML = '&#9994;';
//     if(playerSelection == arry[1]) cd[0].innerHTML = '&#9995;';
//     if(playerSelection == arry[2]) cd[0].innerHTML = '&#9996;';

//     if(computerSelection == arry[0]) cd[1].innerHTML = '&#9994;';
//     if(computerSelection == arry[1]) cd[1].innerHTML = '&#9995;';
//     if(computerSelection == arry[2]) cd[1].innerHTML = '&#9996;';
// }