(function(){
    angular
        .module("UserApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home",
                    {
                        templateUrl: "home.html",
                        controller: "homeController"
                    })
                .when("/users",
                    {
                        templateUrl: "users.html",
                        controller: "userController"
                    })
                .when("/profile/:id",
                    {
                        templateUrl: "profile.html",
                        controller: "profileController"
                    })
                .when("/profile",
                    {
                        templateUrl: "profile.html",
                        controller: "profileController"
                    })
                .when("/courses",
                    {
                        templateUrl: "courses.html"
                    })
                .otherwise({
                    redirectTo: "home"
                })
        });
})();