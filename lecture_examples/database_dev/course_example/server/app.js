module.exports = function(app, mongoose, db) {

    var model = require("./models/course.model.js") (mongoose, db);
    require("./services/course.service.server.js")(app, model);

};