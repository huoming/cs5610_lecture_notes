var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/course');

var CourseSchema = new mongoose.Schema({
    title: String,
    seats: {type: Number, default: 10},  //seats: Number,
    starts : {type:Date, default: Date.now}
});

var Course = mongoose.model('Course', CourseSchema);
var course_data_array = [
    {"title": "Java 101", "seats": 12, "start": "3/2/2016"},
    {"title": "Node.js 101", "seats": 12, "start": "2/3/2016"},
    {"title": "C# 101", "seats": 12, "start": "3/9/2016"},
    {"title": "ASP.NET 101", "seats": 12, "start": "3/10/2016"}
];

Course.create(course_data_array, function(err, results){
    if(err){console.log(err);}
    console.log(results);
});

//console.log(mongoose);

function createCourse(course){
    Course.create(course, function(err, result){
        if(err){console.log(err);}
        console.log(results)
    });
}

function deleteCourse(course){
    Course.remove(course, function(err){
        if(err){console.log(err);}
    });
}