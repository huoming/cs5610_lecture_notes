(function () {
    "use strict";
    angular.module("RouteExampleApp").controller("headerController", headerController);

    /*/!*use location and scope.*!/
    function headerController($scope, $location) {
        $scope.$location = $location;
    }*/
})();