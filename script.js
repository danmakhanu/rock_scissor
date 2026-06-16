let greeting = "Hello world!";

console.log(greeting);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors:");
    return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make human input case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
        return;
    }

    // Human loses cases
    if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    // Human wins cases
    else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

function playGame() {

    // Score variables moved inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer choice
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);

        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Function to get human choice
    function getHumanChoice() {
    let choice;

    while (true) {
        choice = prompt("Enter rock, paper, or scissors:");

        if (choice === null) {
            console.log("Game cancelled.");
            return null;
        }

        choice = choice.toLowerCase();

        if (
            choice === "rock" ||
            choice === "paper" ||
            choice === "scissors"
        ) {
            return choice;
        }

        console.log("Invalid choice! Please enter rock, paper, or scissors.");
    }
}
    // Function to play one round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);

        let humanSelection = getHumanChoice();

        if (humanSelection === null) {
        return; // Exit game if user cancels
        }

        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Final result
    console.log("\nFINAL SCORE");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();