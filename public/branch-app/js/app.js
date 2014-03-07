var recoRequestApp = angular.module('cashOrdersApp', [
    'ngRoute',
    'cashOrdersControllers',
    'cashOrdersServices'
]);

recoRequestApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/branch-app/partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/branches/:branch/orders/:id', {
                templateUrl: '/branch-app/partials/order.html',
                controller: 'OrderCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);
