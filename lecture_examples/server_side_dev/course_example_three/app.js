(function(){
    angular
        .module("CoursesApp", [])
        .controller("coursesController", function($scope, CourseService){

            //get all the courses from the server side via service
            CourseService.getAllCourses(function(response){
                $scope.courses = response;
            });

            $scope.selectCourse = function(index){
                CourseService.getCourseById(index, function(response){
                    $scope.course=response;
                });

            }
        });
})();