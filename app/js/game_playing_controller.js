var Game = require('./../../models/game.js');

module.exports = function(app) {
app.controller('GamePlayingController', ['$scope', '$location', function($scope, $location) {
	
  var myGame;

  $scope.startGame = function() {
    if ($scope.answer) {
      $scope.afterFirstGuess = false;
      $scope.gameOver = false;
      $scope.answerLength = $scope.answer.length;
    	myGame = new Game();
    	myGame.start($scope.answer);
    	$scope.untriedLetters = myGame.getUntriedLetters();
      $scope.guessFeedback = [];
      $scope.guessHistory = [];
    } else {
      $location.path('/');
    }
  };

  $scope.setBGColorBasedOnStatus = function(letter) {
  	return letter.status;
  };

  $scope.guess = function() {
    $scope.afterFirstGuess = true;
  	myGame.processGuess($scope.userInput.guess);
    $scope.guessFeedback = myGame.getGuessFeedback();
    $scope.guessHistory = myGame.getGuessHistory();
 	  checkIfGameOver();
 	  $scope.userInput.guess = null;
  };

  function checkIfGameOver() {
  	$scope.gameOverStats = myGame.getGameOverStats();
    if ($scope.gameOverStats) $scope.gameOver = true;
  }

////END OF CONTROLLER
}]);
};