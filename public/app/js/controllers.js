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
		userService.put({username: $scope.username});
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

controllers.controller('CreateOrderCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
		$scope.create = function() {
		var order = {pennies: $scope.pennies, twoPennies: $scope.twoPennies, fivePennies: $scope.fivePennies, tenPennies: $scope.tenPennies, fiftyPennies: $scope.fiftyPennies, 
				onePound: $scope.onePound, twoPounds: $scope.twoPounds, fivePounds: $scope.fivePounds, tenPounds: $scope.tenPounds, twentyPounds: $scope.twentyPounds, 
				fiftyPounds: $scope.fiftyPounds};
			var userDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/users/' + userService.get().username);
			var userOrderRef = userDataRef.push(order);

			order.userRef = userOrderRef.toString();
			var branchDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/branches/' + $scope.branch);
			branchDataRef.push(order);
		};
    }
]);