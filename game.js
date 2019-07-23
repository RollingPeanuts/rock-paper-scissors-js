/*
function capitalize(word) {
	return word[0].toUpperCase() + word.substr(1);
}

function computerPlay() {
	let computerChoice = ["Rock", "Paper", "Scissors"];
	return computerChoice[Math.floor(Math.random()*3)];
}

function playerPlay() {
	let playerSelection;
	do {
		playerSelection = capitalize(prompt("Whatchu gonna play? (Rock, Paper, or Scissors)").toLowerCase());
	} while(playerSelection != "Rock" && playerSelection != "Paper" &&  playerSelection != "Scissors");

	return playerSelection;
}

function playRound(playerSelection, computerSelection) {
	if(playerSelection == computerSelection)
	{
		console.log("Tie!");
		return playRound(playerPlay(), computerPlay());
	}
	else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock") 
	{
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		return true;
	}
	else
	{
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
		return false;
	}
}

function game() {
	let score = [0, 0];
	while(score[0] < 5 && score[1] < 5)
	{       
		playRound(playerPlay(), computerPlay()) ? score[0]++ : score[1]++; 
		console.log(`Player: ${score[0]}\tComputer: ${score[1]}`);      
	}       

	(score[0] == 5) ? console.log("Game Over! Player Wins!") : console.log("Game Over! Computer Wins!");
	let playAgain = prompt("Play again? (y/n)");
	if(playAgain == "y" || playAgain == "Y")
		game();

	return 0;
}
*/
function setComputerPlay() {
	let computerChoice = ["Rock", "Paper", "Scissors"];
	return computerChoice[Math.floor(Math.random()*3)];
}

function updateResults(playerSelection, computerSelection) {
	if(playerSelection == computerSelection)
	{
		resultsDisplay.textContent = "TIE!";
	}
	else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock") 
	{
		resultsDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		playerScore++;
	}
	else
	{
		resultsDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
		computerScore++;
	}
}

function gameOver() {
	if(playerScore == 5)
		scoreBoard.textContent = "GAME OVER! Player Wins!";
	else
		scoreBoard.textContent = "GAME OVER! Computer Wins!";
	resultsDisplay.textContent = "";
	playerScore = 0;
	computerScore = 0;
}
	

function playGame(e) {
	let playerPlay = e.target.textContent;
	let computerPlay = setComputerPlay();
	updateResults(playerPlay, computerPlay);

	scoreBoard.textContent = `Player: ${playerScore} vs Computer: ${computerScore}`;	
	if(playerScore == 5 || computerScore == 5)
		gameOver();
}

let playerScore = 0;
let computerScore = 0;
const moveChoices = document.querySelectorAll("button");
const resultsDisplay = document.querySelector("p");
const scoreBoard = document.querySelector("h3");
moveChoices.forEach(choice => choice.addEventListener("click", playGame));


