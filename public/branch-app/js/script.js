var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope) {
    
    $scope.users = [
            {name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}
        ];
})