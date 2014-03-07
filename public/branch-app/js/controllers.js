var controllers = angular.module('cashOrdersControllers', []);

controllers.controller('HomeCtrl', [
    '$scope', '$routeParams', '$location', 'userService',
    function ($scope, $routeParams, $location, userService) {
        $scope.branch = '185 Baker Street, NW1 6XB';

        var branchDataRef = null;
        var listener = null;
        $scope.$watch('branch', function (newBranch) {
            if (branchDataRef != null) {
                branchDataRef.off('value', listener);
            }

            branchDataRef = new Firebase('https://amber-fire-7123.firebaseio.com/branches/' + newBranch);
            listener = branchDataRef.on('value', function (snapshot) {
                var snapshotVal = snapshot.val() || {};
                var values = _.map(_.pairs(snapshotVal), function (x) {
                    return _.extend({ id: x[0] }, x[1]);
                });
                _.each(values, function (x) {
                    x.getTotal = function () {
                        return parseInt(x.pennies) +
                            parseInt(x.twoPennies) +
                            parseInt(x.fivePennies) +
                            parseInt(x.tenPennies) +
                            parseInt(x.twentyPennies) +
                            parseInt(x.fiftyPennies) +
                            parseInt(x.onePound) +
                            parseInt(x.twoPounds) +
                            parseInt(x.fivePounds) +
                            parseInt(x.tenPounds) +
                            parseInt(x.twentyPounds) +
                            parseInt(x.fiftyPounds);
                    };
                });
                $scope.orders = values;
                $scope.$apply();
            });
        });

    }
]);

controllers.controller('OrderCtrl', [
    '$scope', '$routeParams', '$location',
    function ($scope, $routeParams, $location) {

        var branchOrderDataRef =
            new Firebase('https://amber-fire-7123.firebaseio.com/branches/' +
                $routeParams.branch + '/' + $routeParams.id);
        branchOrderDataRef.once('value', function (snapshot) {
            var order = snapshot.val();
            $scope.order = order;
            $scope.$apply();
        });

        $scope.update = function () {
            var userOrderDataRef = new Firebase($scope.order.userRef);
            var update = {
                status: $scope.order.status,
                boxNumber: $scope.order.boxNumber,
                boxPin: $scope.order.boxPin
            };
            branchOrderDataRef.update(update);
            userOrderDataRef.update(update);
        };
    }
]);
