/// <reference path="_references.js" />
/// <reference path="services.js" />
var controllers = angular.module('cashOrdersControllers', []);

controllers.controller('LoginCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
        if (userService.get() != null) {
            $location.path('/home');
        }
        $scope.login = function () {
            userService.put({ username: $scope.username });
            $location.path('/home');
        };
    }
]);

controllers.controller('HomeCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
        $scope.$location = $location;
        $scope.ordersReadyToCollect = [{ branch: '185 Baker Street', availableFrom: 'Sat 8th 10am', availableTo: 'Sat 8th 1pm' }];
        $scope.logout = function() {
            userService.put(null);
            $location.path('/login');
        };
    }
]);

controllers.controller('CreateOrderCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
        $scope.pennies = 0;
        $scope.twoPennies = 0;
        $scope.fivePennies = 0;
        $scope.tenPennies = 0;
        $scope.twentyPennies = 0;
        $scope.fiftyPennies = 0;
        $scope.onePound = 0;
        $scope.twoPounds = 0;
        $scope.fivePounds = 0;
        $scope.tenPounds = 0;
        $scope.twentyPounds = 0;
        $scope.fiftyPounds = 0;

        $scope.branch = '185 Baker Street, NW1 6XB';

        $scope.requestedDay = '08';
        $scope.requestedTime = '09';

        $scope.getTotal = function() {
            return parseInt($scope.pennies) +
                parseInt($scope.twoPennies) +
                parseInt($scope.fivePennies) +
                parseInt($scope.tenPennies) +
                parseInt($scope.twentyPennies) +
                parseInt($scope.fiftyPennies) +
                parseInt($scope.onePound) +
                parseInt($scope.twoPounds) +
                parseInt($scope.fivePounds) +
                parseInt($scope.tenPounds) +
                parseInt($scope.twentyPounds) +
                parseInt($scope.fiftyPounds);
        };
        $scope.getWeight = function () {
            return Math.round(((parseInt($scope.pennies) * 0.356) +
                (parseInt($scope.twoPennies) * 0.3565) +
                (parseInt($scope.fivePennies) * 0.065) +
                (parseInt($scope.tenPennies) * 0.065) +
                (parseInt($scope.twentyPennies) * 0.025) +
                (parseInt($scope.fiftyPennies) * 0.016) +
                (parseInt($scope.onePound) * 0.0095) +
                (parseInt($scope.twoPounds) * 0.006) +
                (parseInt($scope.fivePounds) * 0.00022) +
                (parseInt($scope.tenPounds) * 0.00011) +
                (parseInt($scope.twentyPounds) * 0.000055) +
                (parseInt($scope.fiftyPounds) * 0.000022)) * 1000) / 1000;
        };
        $scope.create = function () {
            var order = {
                status: 'pending',
                pennies: parseInt($scope.pennies),
                twoPennies: parseInt($scope.twoPennies),
                fivePennies: parseInt($scope.fivePennies),
                tenPennies: parseInt($scope.tenPennies),
                twentyPennies: parseInt($scope.twentyPennies),
                fiftyPennies: parseInt($scope.fiftyPennies),
                onePound: parseInt($scope.onePound),
                twoPounds: parseInt($scope.twoPounds),
                fivePounds: parseInt($scope.fivePounds),
                tenPounds: parseInt($scope.tenPounds),
                twentyPounds: parseInt($scope.twentyPounds),
                fiftyPounds: parseInt($scope.fiftyPounds),
                branch: $scope.branch,
                pickupTime: '2014-03-' + $scope.requestedDay + ' ' + $scope.requestedTime + ':00:00',
            };
            var userDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/users/' + userService.get().username);
            var userOrderRef = userDataRef.push(order);

            order.userRef = userOrderRef.toString();
            var branchDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/branches/' + $scope.branch);
            branchDataRef.push(order);

            $location.path('/order-recieved');
        };
    }
]);

controllers.controller('OrderRecievedCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
    }
]);
