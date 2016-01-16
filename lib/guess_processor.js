var removeLetter = require('./remove_letter');

function processGuess(guess, answer) { 
	var results = []; 

	for (i=0; i<answer.length; i++) { 
		if (guess[i]) {
			results.push({
				name: guess[i],
				status: 'wrong'
			});
		} else {
			results.push({
				name: ' ',
				status: 'wrong'
			});
		}
	} 

	for (i=0; i<guess.length; i++) { 
		if (answer[i] === guess[i]) {
			results[i].status = 'right';
			answer = removeLetter(answer, i);
			guess = removeLetter(guess, i);
		}
	} 

	for (i=0; i<guess.length; i++) {
		if (guess[i] !== '0') {
			if (answer.indexOf(guess[i]) !== -1) {
				results[i].status = 'half';
				answer = removeLetter(answer, answer.indexOf(guess[i]));
			}
		}
	}

	return results; 	
}

module.exports = exports = processGuess;