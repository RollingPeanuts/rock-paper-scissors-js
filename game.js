function setComputerPlay() {
	let computerChoice = ["Rock", "Paper", "Scissors"];
	return computerChoice[Math.floor(Math.random()*3)];
}

function updateResults(playerSelection, computerSelection) {
	if(playerSelection == computerSelection)
	{
		resultsDisplay.textContent = "TIE!";
	}
	else if(playerSelection == "Rock" && computerSelection == "Scissors" || 
		playerSelection == "Scissors" && computerSelection == "Paper" ||
		playerSelection == "Paper" && computerSelection == "Rock") 
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

