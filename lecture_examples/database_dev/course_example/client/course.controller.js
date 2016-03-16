(function(){
    angular
        .module("CoursesApp")
        .controller("coursesController", function($scope, CourseService){

            loadAllCourses();
            function loadAllCourses() {
                CourseService.getAllCourses()
                    .then(function (all_courses) {
                        $scope.courses = all_courses;
                    });
            }

            $scope.selectCourse = function(course){
                //$scope.selectedIndex = index;
                var course_id = course._id;
                CourseService.getCourseById(course_id)
                    .then(function(course){
                    $scope.course = course;
                });
            }

            $scope.delCourseById = function(course){
                var course_id = course._id;
                CourseService.deleteCourseById(course_id)
                    .then(function(courses){
                        $scope.courses = courses;
                    });
            }

            $scope.updateCourse = function(course){
                var course_id = course._id;
                CourseService.updateCourseById(course_id, course)
                    .then(function(courses){
                        $scope.courses=courses;
                    });
            }

            $scope.addCourse = function(course){

                CourseService.createCourse(course)
                    .then(function(course){
                        $scope.courses.push(course);
                    });
            }
        });
})();