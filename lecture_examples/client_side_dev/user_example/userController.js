(function()
{
    angular
        .module("UserApp")
        .controller("userController", function UserController($scope, UserServices)
        {
            $scope.users = UserServices.findAllUsers();
        });
})();