/// <reference path="_references.js" />
/// <reference path="services.js" />
var controllers = angular.module('cashOrdersControllers', []);

controllers.controller('ViewOrderCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {

			var branchDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/branches/' + $scope.branch);
			var allOrders = branchDataRef.on('value', function(dataSnapshot){});
			document.write(allOrders.toString());
		
    }
]);

