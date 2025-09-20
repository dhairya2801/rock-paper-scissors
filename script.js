let hScore = 0;
let cScore = 0;
const winner = document.querySelector('.winner');

const buttons = document.querySelectorAll('button');
let hChoice;
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        switch (btn.className) {
            case 'rockBtn':
                hChoice = 'rock';
                break;
            case 'paperBtn':
                hChoice = 'paper';
                break;
            case 'scissorBtn':
                hChoice = 'scissor';
                break;
        }
        winner.textContent = '';
        const humanSelection = document.querySelector('.humanSelection');
        humanSelection.textContent = `You selected: ${hChoice[0].toUpperCase() + hChoice.slice(1)}`;
        playRound(hChoice);
    })
})

function getComputerChoice() {
    let choice = Math.floor(10*Math.random());

    let out = "";
    if (choice <= 3) {
        out = "rock";
    }
    else if (choice >= 7) {
        out = "scissor";
    }
    else {
        out = "paper";
    }
    return out;
}

function playRound(human) {
    let computer = getComputerChoice();
    const computerSelection = document.querySelector('.computerSelection');
    computerSelection.textContent = `Computer selected: ${computer[0].toUpperCase() + computer.slice(1)}`;

    if (human === computer) {
        return console.log('tie');
    }
    if (human === "rock") {
        if (computer === "paper") {
            console.log("Computer selected paper. Computer wins!");
            ++cScore;
        }
        else {
            console.log("Computer selected scissors. You win!");
            ++hScore;
        }
    }
    else if (human === "paper") {
        if (computer === "rock") {
            console.log("Computer selected rock. You win!");
            ++hScore;
        }
        else {
            console.log("Computer selected scissors. Computer wins!");
            ++cScore;
        }
    }
    else {
        if (computer === "rock") {
            console.log("Computer selected rock. Computer wins!");;
            ++cScore;
        }
        else {
            console.log("Computer selected paper. You win!");
            ++hScore;
        }
    }

    const score = document.querySelector('.score');
    score.textContent = `Score: You: ${hScore}, Computer: ${cScore}`;
    if (hScore == 5 || cScore == 5) {
        winner.textContent = (hScore == 5) ? 'You WIN!' : 'You lose, try again!';
        hScore = 0;
        cScore = 0;
    }
}