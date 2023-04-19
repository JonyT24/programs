const screen = document.querySelector('.screen');
const choiceRock = document.querySelector('.choiceRock');
const choicePaper = document.querySelector('.choicePaper');
const choiceScissors = document.querySelector('.choiceScissors');
const gameText = document.querySelector('.gameText');
const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
const resultText = document.getElementById('resultText');
const playerPic = document.querySelector('.playerPic');
const computerPic = document.querySelector('.computerPic');



let playerScore = 0;
let computerScore = 0;




function playGame(playerSelection) {
    let computerSelection = getRandomWeapon();
    if (computerSelection === playerSelection) {
        resultText.textContent = "Result: DRAW";
        greyGlow();
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS' ||
             computerSelection == 'SCISSORS' && playerSelection =='ROCK'||
             computerSelection == 'ROCK' && playerSelection == 'PAPER') {
                playerWins(playerSelection, computerSelection);
             }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER' ||
             computerSelection == 'ROCK' && playerSelection =='SCISSORS'||
             computerSelection == 'PAPER' && playerSelection == 'ROCK') {
                computerWins(playerSelection, computerSelection);
             }

    if (playerScore == 5 ) {
        resultText.textContent = `PLAYER WIN! (${playerScore} - ${computerScore})`;
        computerScore = 0;
        playerScore = 0;
        playerText.textContent = `Player: ${playerScore}`;
        computerText.textContent = `Computer: ${computerScore}`;
        document.getElementById("player").src = "./Pictures/question-mark.png";
        document.getElementById("pc").src = "./Pictures/question-mark.png";
        }
       
    if (computerScore == 5) {
        resultText.textContent = `PC WINS! (${computerScore} - ${playerScore})`;
        computerScore = 0;
        playerScore = 0;
        playerText.textContent = `Player: ${playerScore}`;
        computerText.textContent = `Computer: ${computerScore}`;
        document.getElementById("player").src = "./Pictures/question-mark.png";
        document.getElementById("pc").src = "./Pictures/question-mark.png";
    }
    if (computerSelection === "ROCK")  document.getElementById("pc").src = "./Pictures/rock.png"
    if (computerSelection === "PAPER")  document.getElementById("pc").src = "./Pictures/Paper.png"
    if (computerSelection ==="SCISSORS")  document.getElementById("pc").src = "./Pictures/scissors.png"
    
}


choiceRock.addEventListener('click', function() {
    document.getElementById("player").src = "./Pictures/rock.png"
    playGame('ROCK');
})

choicePaper.addEventListener('click', function() {
    document.getElementById("player").src = "./Pictures/Paper.png"
    playGame('PAPER');
})

choiceScissors.addEventListener('click', function() {
    document.getElementById("player").src = "./Pictures/scissors.png"
    playGame('SCISSORS');
})



function getRandomWeapon () {
    const array = ["ROCK", "PAPER", "SCISSORS"];
    const randomWeapon = array[Math.floor(Math.random() * 3)];
    return randomWeapon;
}

function redGlow() {
    document.querySelector(".playerPic").classList.add("red-glow");
    document.querySelector(".computerPic").classList.add("red-glow");
    
    setTimeout(function() {
        document.querySelector(".playerPic").classList.remove("red-glow");
        document.querySelector(".computerPic").classList.remove("red-glow")
    }, 500);
}

function greenGlow(){
    document.querySelector(".playerPic").classList.add("green-glow");
    document.querySelector(".computerPic").classList.add("green-glow");
    
    setTimeout(function() {
        document.querySelector(".playerPic").classList.remove("green-glow");
        document.querySelector(".computerPic").classList.remove("green-glow")
    }, 500);
}

function greyGlow() {
    document.querySelector(".playerPic").classList.add("grey-glow");
    document.querySelector(".computerPic").classList.add("grey-glow");
    
    setTimeout(function() {
        document.querySelector(".playerPic").classList.remove("grey-glow");
        document.querySelector(".computerPic").classList.remove("grey-glow")
    }, 500);
}


function playerWins (playerSelection, computerSelection) {

    resultText.textContent = playerSelection + " beats " + computerSelection + ", you WIN 🔥";
    playerScore++;
    playerText.textContent = `Player: ${playerScore}`;
    greenGlow();

}

function computerWins (playerSelection, computerSelection) {
    resultText.textContent = computerSelection + " beats " + playerSelection + ", you LOSE 💀";
    computerScore++;
    computerText.textContent = `Computer: ${computerScore}`;
    redGlow();
    
    

}












