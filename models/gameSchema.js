var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
	code: String,
	answer: String
});

module.exports = mongoose.model('Game', gameSchema);
