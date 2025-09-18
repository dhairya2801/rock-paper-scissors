function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (i=0; i<5; ++i) {
        let round = playRound();
        if (round === 'H') {
            ++humanScore;
        }
        else if (round === 'C' ) {
            ++computerScore;
        }
    }

    function getComputerChoice() {
        let choice = Math.floor(10*Math.random());

        let out = "";
        if (choice <= 3) {
            out = "rock";
        }
        else if (choice >= 7) {
            out = "scissors";
        }
        else {
            out = "paper";
        }
        return out;
    }

    function getHumanChoice() {
        return prompt("Select your choice (rock/paper/scissor): ")
    }

    function playRound() {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        if (human === computer) {
            return console.log("Tied")
        }
        if (human === "rock") {
            if (computer === "paper") {
                console.log("Computer selected paper. Computer wins!");
                return 'C';
            }
            else {
                console.log("Computer selected scissors. You win!");
                return 'H'
            }
        }
        else if (human === "paper") {
            if (computer === "rock") {
                console.log("Computer selected rock. You win!");
                return 'H';
            }
            else {
                console.log("Computer selected scissors. Computer wins!");
                return 'C';
            }
        }
        else {
            if (computer === "rock") {
                console.log("Computer selected rock. Computer wins!");;
                return 'C';
            }
            else {
                console.log("Computer selected paper. You win!");
                return 'H'
            }
        }
    }
    return console.log(`You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();