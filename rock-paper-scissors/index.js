const prompt = require("readline-sync");
const rps = require("./rockpaperscissors");
const colors = require("ansi-colors");

let programAnswer;

while (true) {
	let userAnswer;
	while (true) {
		userAnswer = prompt.question(
			'Please choose "rock", "paper" or "scissors": '
		);
		if (
			userAnswer !== "rock" &&
			userAnswer !== "paper" &&
			userAnswer !== "scissors"
		) {
			console.log(
				colors.magenta(
					"Please enter a valid choice of 'rock', 'paper' or 'scissors': "
				)
			);
			continue; // Restart the loop
		}
		break; // Break out of the loop if the answer  is valid
	}

	const result = rps(userAnswer, programAnswer);
	console.log(`The result is: ${result}`);

	const continuePlaying = prompt.question(
		"Do you want to play another game? (yes/no): "
	);
	if (continuePlaying.toLowerCase() !== "yes") {
		break; // Exit the loop if the user doesn't want to continue
	}
}
