(function(){
    angular
        .module("CoursesApp", [])
        .controller("coursesController", function($scope, CourseService){

            CourseService.getAllCourses()
                .then(function(response){
                    $scope.courses=response;
                });

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