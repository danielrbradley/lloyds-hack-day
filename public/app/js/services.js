/// <reference path="_references.js" />
var recoRequestServices = angular.module('cashOrdersServices', ['ngResource']);

recoRequestServices.factory('ordersService', [
    '$resource',
    function ($resource) {
        return $resource('/api/orders/');
    }
]);
