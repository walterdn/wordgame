module.exports = function(app) {
app.controller('GlobalController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  
  $scope.userInput = {};
  $scope.validCode = false;

  $scope.checkCode = function() {
    if ($scope.userInput.code) {
      var code = $scope.userInput.code.toLowerCase();
      $http.get('/fetch/' + code)
        .then(function(res) {
          if (res.data.length > 0) { //if code is not valid, res.data will be an empty array
            $scope.validCode = true;
          } else {
            $scope.validCode = false;
          } 
        });    
    }
  };

  $scope.playGame = function() {
    var code = $scope.userInput.code.toLowerCase();
    $scope.userInput.code = null;
    $scope.validCode = false;
    $location.path('/' + code);
  };

////END OF CONTROLLER BODY
}]);
};
