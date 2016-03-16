(function(){
    angular
        .module("CoursesApp")
        .factory("CourseService", courseService);

    function courseService($http, $q){

        var service = {
            getAllCourses : getAllCourses,
            getCourseById : getCourseById,
            createCourse : createCourse,
            deleteCourseById : deleteCourseById,
            updateCourseById : updateCourseById,
        };
        return service;

        function getAllCourses(){

            var deferred = $q.defer();

            $http.get("/rest/course")
                .success(function(courses){
                    deferred.resolve(courses);
                });

            return deferred.promise;
        }

        function getCourseById(courseId){

            var deferred = $q.defer();

            $http
                .get("/rest/course/" + courseId)
                .success(function(course){
                    deferred.resolve(course);
                });

            return deferred.promise;
        }

        function createCourse(course){
            var deferred = $q.defer();

            $http
                .post("/rest/course/", course)
                .success(function(courses){
                    deferred.resolve(courses);
                });

            return deferred.promise;
        }

        function deleteCourseById(courseId){
            console.log("deleting course..." + courseId);
            var deferred = $q.defer();

            $http
                .delete("/rest/course/" + courseId)
                .success(function(courses){
                    deferred.resolve(courses);
                });

            return deferred.promise;
        }

        function updateCourseById(courseId, course){
            var deferred = $q.defer();

            $http
                .put("/rest/course/"+ courseId, course)
                .success(function(course){
                    deferred.resolve(course);
                });

            return deferred.promise;
        }
    }
})();