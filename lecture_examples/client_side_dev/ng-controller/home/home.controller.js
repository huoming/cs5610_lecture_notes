(function(){
    angular
        .module("RouteExampleApp")
        .controller("HomeController", HomeControllerTwo);

    function HomeControllerTwo($scope) {
        $scope.homeHello = "Hello from HomeController"
    }
})();