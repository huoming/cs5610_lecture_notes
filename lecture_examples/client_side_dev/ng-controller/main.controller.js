(function(){
    angular
        .module("RouteExampleApp")
        .controller("MainController", function($scope, $location) {
            $scope.$location = $location;
        });
})();

