(function() {
    angular
        .module("CoursesApp")
        .factory("CourseService", courseService);

    function courseService($http){
        var services = {
            getAllCourses : getAllCourses,
            getCourseById : getCourseById
        };
        return services;

        function getAllCourses(callback){
            $http
                .get("/rest/course")
                .success(callback);
        }

        function getCourseById(index, callback){
            $http
                .get("/rest/course/" + index)
                .success(callback);
        }
    }
})();
