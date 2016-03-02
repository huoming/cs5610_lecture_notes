module.exports=function(app){
    //rest apis
    var courses = [
        {title: "Java 101", seats: 12, start: new Date()},
        {title: "Node.js 101", seats: 12, start: new Date()},
        {title: "C# 101", seats: 12, start: new Date(2016,9,18)},
        {title: "ASP.NET 101", seats: 12, start: new Date(2016,1,19)},
    ];

    app.get('/rest/course', function(req, res){
        console.log("sending courses to client..");
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