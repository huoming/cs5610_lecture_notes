(function(){
    angular
        .module("CoursesApp", [])
        .controller("coursesController", function($scope, CourseService){

            /*var courses = [
                {title: "Java 101", seats: 12, start: new Date()},
                {title: "Node.js 101", seats: 12, start: new Date()},
                {title: "C# 101", seats: 12, start: new Date(2016,9,18)},
                {title: "ASP.NET 101", seats: 12, start: new Date(2016,1,19)},
            ];*/

            /*$http
                .get("/rest/course")
                .success(function(response){
                    $scope.courses = response;
                });
            */
           /* $scope.courses = courses;*/
            /*CourseService.getAllCourses(function(response){
                $scope.courses=response;});*/

            CourseService.getAllCourses(renderAllCourses);

            function renderAllCourses(all_courses){
                $scope.courses=all_courses;
            }

            $scope.selectCourse = function(index){
                $scope.selectedIndex = index;
                CourseService.getCourseById(index, function(response){
                    $scope.course = response;
                });
            }

            $scope.delCourseById = function(course_index){
                CourseService.deleteCourseById(course_index, renderAllCourses);
            }

            $scope.updateCourse = function(course){
                CourseService.updateCourseById($scope.selectedIndex, course, renderAllCourses);
            }
        });
})();