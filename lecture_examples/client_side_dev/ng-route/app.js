(function(){
    angular
        .module("RouteApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "home/home.html"
                })
                .when("/profile", {
                    templateUrl: "profile.html"
                })
                .when("/helloP",{
                    templateUrl: "home.html"
                })
                .when("/admin", {
                    templateUrl: "admin.html"
                })
                .otherwise({
                    redirectTo: "/home.html"
                });
        })
       .controller("NavControllerTwo", function($scope, $location){
           console.log("I am at: " + $location.url);
           $scope.$location = $location;
        });
})();


