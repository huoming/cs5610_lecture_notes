module.exports=function(app){

    //require("./service/user.service.server.js")(app);
    require("./service/course.service.server.js")(app);
}

/*
module.exports=function(app, mongoose, db){
    require("./service/course.service.server.js")(app);
}*/
