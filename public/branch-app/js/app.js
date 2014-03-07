var recoRequestApp = angular.module('cashOrdersApp', [
    'ngRoute',
    'cashOrdersControllers',
    'cashOrdersServices'
]);

recoRequestApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/branch-home', {
                templateUrl: '/branch-app/partials/orders-overview.html',
                controller: 'ViewOrderCtrl'
            })
		}
	
]);
