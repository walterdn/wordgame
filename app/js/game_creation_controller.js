var randomStringGenerator = require('./../../lib/random_string_generator.js');

module.exports = function(app) {
app.controller('GameCreationController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	
  $scope.info = {};

  $scope.createGame = function() { 
    var code = randomStringGenerator();
    var answerWord = $scope.userInput.answer.toLowerCase();
    $scope.userInput.answer = null;

    var successCb = function(res) {
      $scope.info.text = 'Send the code ' + code + ' to a friend so they can try to guess the word "' + answerWord + '".';
    };
    var errorCb = function(err) {
      console.log('Could not create new game.');
    };
    var req = {
      method: 'POST',
      url:'/new',
      data: { code: code,
              answer: answerWord
            }
    };
    
    $http(req).then(successCb, errorCb);  
  };

////END OF CONTROLLER
}]);
};