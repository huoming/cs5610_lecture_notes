var q = require("q");

module.exports = function(mongoose, db){

    var CourseSchema = require('./course.schema.js')(mongoose);
    var courseModel = mongoose.model("courseModel", CourseSchema);

    var courses = require("./course.mock.json");

    var api = {
        findAllCourses : findAllCourses,
        findCourseById : findCourseById,
        createCourse : createCourse,
        deleteCourseById : deleteCourseById,
        updateCourseById : updateCourseById,
        findCourseByTitle : findCourseByTitle
    };
    return api;

    function CreateAllCourses(){
        courseModel.create(courses, function(err, courses){
            if(err){
                console.log("create all courses errors: " + err);
            }
            else{
                console.log("create all courses successful!");
            }
        });
    }

    function findAllCourses() {

        //CreateAllCourses();

        var deferred = q.defer();
        courseModel.find(function(err, courses){
            if(err){
                deferred.reject(err);
                console.log("find all courses errors: " + err);
            }
            else{
                deferred.resolve(courses);
            }
        });
        return deferred.promise;
    }

    function findCourseById(courseId) {

        var deferred = q.defer();
        courseModel.findById({_id: courseId}, function(err, course){
            if(err){
                deferred.reject(err);
            }else{
            deferred.resolve(course);}
        });
        return deferred.promise;
    }

    function findCourseByTitle(title) {

        var deferred = q.defer();
        courseModel.findOne({title: title}, function(err, courses){
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(courses);
            }
        });
        return deferred.promise;
    }

    function deleteCourseById(courseId) {
        var deferred = q.defer();
        courseModel.remove({_id: courseId},function(err, users){
            if(err){
                deferred.reject(err);
            }
            else{
                courseModel.find(function(err, courses){
                    if(err){
                        deferred.reject(err);
                    }
                    else{
                        deferred.resolve(courses);
                    }
                });
            }
        });
        return deferred.promise;
    }

    function createCourse(newCourse) {
        var deferred = q.defer();
        var newCourse = newCourse;

        courseModel.create(newCourse, function(err, courses){
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(courses);
            }
        });

        return deferred.promise;
    }

    function updateCourseById(courseId, courseObj) {

        var deferred = q.defer();

        //delete courseObj._id;
        console.log(courseObj);

        courseModel.update({_id: courseId}, {$set: courseObj}, function(err, course) {
            if(err){deferred.reject(err);}
            else{
                courseModel.find(function(err, courses){
                    if(err){
                        deferred.reject(err);
                    }
                    else{
                        deferred.resolve(courses);
                    }
                });
            }
        });

        return deferred.promise;
    }
};