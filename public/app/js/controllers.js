/// <reference path="_references.js" />
/// <reference path="services.js" />
var controllers = angular.module('cashOrdersControllers', []);

controllers.controller('HomeCtrl', [
    '$scope', '$routeParams', '$location', 'ordersService',
    function ($scope, $routeParams, $location, ordersService) {
        $scope.text = 'hello world';
    }
]);
