var Game = require('./../../models/game.js');

module.exports = function(app) {
app.controller('GamePlayingController', ['$scope', '$location', '$http', function($scope, $location, $http) {
	
  var myGame;

  $scope.getCodeFromURL = function() {
    var url = $location.url();

    if (url.length > 1) { //if url contains more than just a slash
      // var code = url.substring(1, url.length); //removes the slash from beginning of url
      var code = 7475;
      $http.get('/fetch/' + code)
        .then(function(res) {
          if (res.data.length > 0) { //if code is not valid, res.data will be an empty array
            // var answer = res.data[0].answer;
            var answer = 'hello';
            startGame(answer);
          } else {
            $location.path('/');
          }
        });
    } 
  };

  function startGame(answer) {
    if (!answer) return;

    $scope.afterFirstGuess = false;
    $scope.gameOver = false;
    $scope.answerLength = answer.length;
    $scope.message = answer;
    console.log($scope.message);
  	myGame = new Game();
  	myGame.start(answer);
  	$scope.untriedLetters = myGame.getUntriedLetters();
    $scope.guessFeedback = [];
    $scope.guessHistory = [];
  }

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

  $scope.setBGColorBasedOnStatus = function(letter) {
    return letter.status;
  };

////END OF CONTROLLER
}]);
};
