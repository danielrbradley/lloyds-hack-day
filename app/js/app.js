var recoRequestApp = angular.module('cashOrdersApp', [
    'ngRoute',
    'cashOrdersControllers',
    'cashOrdersServices'
]);

recoRequestApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: '/app/partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/login', {
                templateUrl: '/app/partials/login.html',
                controller: 'LoginCtrl'
            }).
            when('/create-order', {
                templateUrl: '/app/partials/create-order.html',
                controller: 'CreateOrderCtrl'
            }).
            when('/order-recieved', {
                templateUrl: '/app/partials/order-recieved.html',
                controller: 'OrderRevievedCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }
]);
