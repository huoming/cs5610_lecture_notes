(function(){
    angular
        .module("RouteExampleApp")
        .controller("AdminController", AdminController);


    function AdminController($scope) {
        $scope.adminHello = "Hello -- admin controller triggered! ";
    }
})();