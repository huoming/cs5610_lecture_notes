(function(){
    angular
        .module("WhiteBoardApp")
        .controller("profile.controller", ProfileController);
    function ProfileController($scope) {
        $scope.profileHello = "Hello from ProfileController"
    }
})();