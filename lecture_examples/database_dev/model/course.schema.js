module.exports = function(mongoose) {
    var CourseSchema = mongoose.Schema({
        "title": String,
        "seats" : String,
        "starts" : String
    }, {collection: "cs5610spring2016.user"});

    return CourseSchema;
};