/// <reference path="_references.js" />
var lloydsRequestServices = angular.module('cashOrdersServices', ['ngResource']);

lloydsRequestServices.factory('ordersService', [
    '$resource',
    function ($resource) {
        return $resource('/api/orders/');
    }
	
	
]);

var currentUser = {username: 'foo' };

lloydsRequestServices.factory('userService', [
    function () {
		var service = {};
		
		service.get = function() {
			return currentUser;
		};
		
		service.put = function(user) {
			currentUser = user;
		};
		
        return service;
    }
]);
