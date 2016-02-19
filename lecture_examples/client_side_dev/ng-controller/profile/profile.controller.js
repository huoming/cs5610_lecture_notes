(function(){
    angular
        .module("RouteExampleApp")
        //.controller("ProfileController", ProfileController);
        .controller("ProfileController", function($scope){
            $scope.profileHello = "Hello from ProfileController"
        });

    /*function ProfileController($scope) {
     $scope.profileHello = "Hello from ProfileController"
     }*/
})();