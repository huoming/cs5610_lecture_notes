(function(){
    angular
        .module("CoursesApp")
        .factory("CourseService", courseService);

    function courseService($http){

        var service = {
            getAllCourses : getAllCourses,
            getCourseById : getCourseById,
            createCourse : createCourse,
            deleteCourseById : deleteCourseById,
            updateCourseById : updateCourseById
        };
        return service;

        function getAllCourses(callback){
            
            $http
                .get("/rest/course")
                .success(callback);
        }

        function getCourseById(courseId, callback){
            $http
                .get("/rest/course/" + courseId)
                .success(callback);
        }

        function createCourse(){}

        function deleteCourseById(courseId, callback){
            console.log("deleting course..." + courseId);
            $http
                .delete("/rest/course/" + courseId)
                .success(callback);
        }

        function updateCourseById(courseId, course, callback){
            /*$http
                .put("rest/course/" + courseId, course)
                .success(callback);*/

            $http
                .put("/rest/course/"+ courseId, course)
                .success(callback);
        }
    }
})();