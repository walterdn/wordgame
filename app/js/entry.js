require('angular/angular');
require('angular-route');
var angular = window.angular;

var wordBreakerApp = angular.module('WordBreakerApp', ['ngRoute']);
require('./global_controller')(wordBreakerApp);
require('./game_creation_controller')(wordBreakerApp);
require('./game_playing_controller')(wordBreakerApp);

wordBreakerApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/templates/game_creation.html',
      controller: 'GameCreationController'
    })
    .when('/play', {
      templateUrl: '/templates/game_playing.html',
      controller: 'GamePlayingController'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);
