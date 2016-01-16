var express = require('express');
var bodyParser = require('body-parser').json();
var Game = require(__dirname + '/../models/gameSchema');
var handleError = require(__dirname + '/../lib/handle_server_error');

var gameRouter = module.exports = express.Router();
gameRouter.use(bodyParser);

gameRouter.post('/new', bodyParser, function(req, res) {
  var newGame = new Game(req.body);
  newGame.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

gameRouter.get('/fetch/:code', function (req, res) {
  Game.find({code : req.params.code}, function(err, data) {
    if (err) return handleError(err, res); 

    if (data.length > 0) {
	    res.json(data);
    } else {
    	res.json({err: 'Not found'});
    }
  });
});