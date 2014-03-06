/// <reference path="_references.js" />
/// <reference path="services.js" />
var controllers = angular.module('cashOrdersControllers', []);

controllers.controller('LoginCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
		if(userService.get() != null) {
		    $location.path('/home');
		}
		$scope.login = function() {
		userService.put($scope.username);
		$location.path('/home');
		};
    }
]);

controllers.controller('HomeCtrl', [
    '$scope', '$routeParams', '$location', 'ordersService',
    function ($scope, $routeParams, $location, ordersService) {
        var myDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/');
    }
]);
