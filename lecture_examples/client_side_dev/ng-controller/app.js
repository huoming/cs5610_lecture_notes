(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
        .controller("NavController", function($scope, $location) {
            $scope.$location = $location;
            });
})();

