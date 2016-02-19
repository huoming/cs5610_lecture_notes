(function()
{
    angular
        .module("UserApp")
        .controller("userController", function UserController($scope, UserService)
        {
            $scope.users = UserService.findAllUsers();
        });
})();