(function(){
    angular
        .module("RouteExampleApp")
        //.controller("ProfileController", ProfileController);
        .controller("ProfileController", function($scope){

            console.log("in profile controller!");
            $scope.profileHello = "Hello from ProfileController"
        });

    /*function ProfileController($scope) {
     $scope.profileHello = "Hello from ProfileController"
     }*/
})();