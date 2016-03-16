module.exports = function(app, mongoose, db) {

    var model = require("./models/course.model.server.js") (mongoose, db);
    require("./services/course.service.server.js")(app, model);

};