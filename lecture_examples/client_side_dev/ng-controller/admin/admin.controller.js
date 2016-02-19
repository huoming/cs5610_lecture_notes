(function(){
    angular
        .module("RouteExampleApp")
        .controller("AdminController", AdminController);
    function AdminController($scope) {
        $scope.adminHello = "Hello from AdminController"
    }
})();