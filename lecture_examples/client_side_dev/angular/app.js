var app = angular.module("HelloWorldApp", []);
app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($scope) {
    console.log("in controller");
    $scope.hello = "Hello World from AngularJS";

    $scope.setLorem = function(){
        $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    }

    $scope.add = addIntegers;

    function addIntegers(a, b) {
        $scope.result = a + b;
    }

    $scope.setAuthor = function(author){
        console.log("set author!");
        $scope.theAuthor = author;
    }
}