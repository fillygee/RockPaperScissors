const colors = require("ansi-colors");

let rpsArray = ["rock", "paper", "scissors"];

const rps = (userAnswer, programAnswer) => {
	let result;

	random = Math.floor(Math.random() * rpsArray.length);

	programAnswer = rpsArray[random];

	console.log(`Program plays ${programAnswer}!`);

	if (programAnswer === "rock" && userAnswer === "paper") {
		return (result = colors.green("user wins"));
	}

	if (programAnswer === "rock" && userAnswer === "scissors") {
		return (result = colors.red("program wins"));
	}

	if (programAnswer === "paper" && userAnswer === "scissors") {
		return (result = colors.green("user wins"));
	}

	if (programAnswer === "paper" && userAnswer === "rock") {
		return (result = colors.red("program wins"));
	}

	if (programAnswer === "scissors" && userAnswer === "rock") {
		return (result = colors.green("user wins"));
	}

	if (programAnswer === "scissors" && userAnswer === "paper") {
		return (result = colors.red("program wins"));
	} else {
		return (result = colors.yellow("it's a draw!"));
	}
};

module.exports = rps;
