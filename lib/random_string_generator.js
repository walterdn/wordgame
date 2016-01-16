function randomStringGenerator() {
	var string = '';
	var possible = '0123456789abcdef';
	for(i=0;i<4;i++) {
    string += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return string;
}

module.exports = exports = randomStringGenerator;