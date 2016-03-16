(function(){
    angular
        .module("WhiteBoardApp")
        .controller("profile.controller", ProfileController);
    function ProfileController($scope, $rootScope) {
        $scope.profileHello = "Hello from ProfileController"
    }
})();