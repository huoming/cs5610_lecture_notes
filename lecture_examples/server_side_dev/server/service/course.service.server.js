module.exports = function(app){

    //read the data from mock json file
    var courses = require('./course.mock.json');

    //rest apis
    app.get('/rest/course', function(req, res){
        console.log("after refactoring ----sending courses to client..");
        res.send(courses);
    });

    app.get('/rest/course/:id', function(req, res){

        var course_index = req.params["id"];
        console.log("sending course back to client.." + course_index);

        res.send(courses[course_index]);
    });

    app.delete("/rest/course/:id", function(req, res){
        console.log("server side deleting...");
        var course_id = req.params["id"];
        courses.splice(course_id, 1);
        res.send(courses);
    });

    app.put('/rest/course/:id', function(req, res){
        var index = req.params["id"];
        console.log('updating...' + index);

        var course = req.body;
        console.log('updating..course title: ' + course.title);

        courses[index].title = course.title;
        courses[index].seats = course.seats;
        courses[index].start = course.start;

        res.json(courses);
    });
}
