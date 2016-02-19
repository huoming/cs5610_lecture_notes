(function()
{
    angular
        .module("UserApp")
        .controller("mainController", mainController);

    function mainController($scope, $location)
    {
        $scope.$location = $location;

        console.log($location.url());
    }
})();