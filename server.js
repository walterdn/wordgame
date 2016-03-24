var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var gameRouter = require(__dirname + '/routes/game_routes');

process.env.APP_SECRET = process.env.APP_SECRET || 'hello'; 

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/word_breaker_dev');

app.use(express.static(__dirname + '/build'));

app.use(gameRouter);

app.listen(port, function() {
  console.log('Server up on port ' + port);
});

