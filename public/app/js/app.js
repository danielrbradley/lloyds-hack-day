var recoRequestApp = angular.module('cashOrdersApp', [
    'ngRoute',
    'cashOrdersControllers',
    'cashOrdersServices'
]);

recoRequestApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: '/app/partials/home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);
