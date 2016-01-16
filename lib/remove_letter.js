function removeLetter(string, index) { 
	var firstPart = string.substring(0, index);
	var secondPart = string.substring(index+1, string.length);

	return firstPart + '0' + secondPart;
}

module.exports = exports = removeLetter;