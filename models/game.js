var processGuess = require('./../lib/guess_processor');

var Game = function() {
	var answer;
	var untriedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var lastGuessFeedback = [];
	var guessFeedbackHistory = [];
	var startTime;
	var endTime;
	var gameOverStats = null; //gets set to an object when game is over

	this.start = word => {
		answer = word.toLowerCase();
		lastGuessFeedback = [];
		guessFeedbackHistory = [];
		startTime = new Date();
	};

	this.getGameOverStats = () => {
		return gameOverStats;
	};

	this.getUntriedLetters = () => {
		return untriedLetters;
	};

	this.getGuessFeedback = () => {
		return lastGuessFeedback;
	};

	this.getGuessHistory = () => {
		return guessFeedbackHistory;
	};

	this.processGuess = guess => {
		guess = guess.toLowerCase();
		this.updateUntriedLetters(guess);
		var feedback = processGuess(guess, answer);
		lastGuessFeedback = feedback;

		if (this.checkIfGameIsWon(feedback)) {
			endTime = new Date();
			gameOverStats = {
				guesses: guessFeedbackHistory.length,
				seconds: Math.round((endTime - startTime)/1000)
			};
		} else {
			guessFeedbackHistory.push(feedback);
		}
	};

	this.updateUntriedLetters = guess => {
		for (i=0; i<guess.length; i++) {
			var index = untriedLetters.indexOf(guess[i]);
			if (index !== -1) untriedLetters.splice(index, 1);
		}
	};

	this.checkIfGameIsWon = feedback => {
		var gameWon = true;
		feedback.forEach(letter => {
			if (letter.status !== 'right') gameWon = false;
		});
		return gameWon;
	};
};

module.exports = exports = Game;