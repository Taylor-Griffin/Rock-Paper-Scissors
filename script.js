const buttons = document.querySelectorAll('input');

const results = document.getElementById('results');
const totals = document.getElementById('totals');
const reset = document.getElementById('reset');






let playerScore = 0;
let compScore = 0;
let gameTotal = 0;
let drawTotal= 0;

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 1) {
        return ('rock')
    } else if (computerSelection === 2) {
        return ('paper');
    } else return ('scissors');

}

function disableButtons(){
    buttons.forEach(button=>{
        button.disabled=true;
    })
}

function resetGame(){
    location.reload();
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();


    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        results.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        gameTotal += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        results.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        compScore += 1;
        gameTotal += 1;
    } else if (playerSelection === computerSelection) {
        results.innerHTML = `Draw!`;
        drawTotal +=1;
        gameTotal += 1;

    }


    totals.innerHTML = `Player= ${playerScore} Computer= ${compScore} Draw=${drawTotal} Game Total= ${gameTotal}`;
    if (gameTotal === 5) {
        disableButtons();
        if (playerScore > compScore) {
            results.innerHTML = `You won the game! Reset to play again!`;
        } else results.innerHTML = `You lost the game 😦 Reset to play again!`;;
}

}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
       })
    });

reset.addEventListener('click', resetGame);