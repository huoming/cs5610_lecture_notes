(function(){
    angular
        .module("CoursesApp", ['jgaTable'])
        .controller("coursesController", function($scope){

            var courses = [
                {title: "Java 101", seats: 12, start: new Date()},
                {title: "Node.js 101", seats: 12, start: new Date()},
                {title: "C# 101", seats: 12, start: new Date(2016,9,18)},
                {title: "ASP.NET 101", seats: 12, start: new Date(2016,1,19)},
            ];

            $scope.courses = courses;

        });
})();