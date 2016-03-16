var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/course');

var CourseSchema = new mongoose.Schema({
    title: {type:String, default: "C++" }, //String,
    seats: {type: Number, default: 10},  //seats: Number,
    starts : {type:Date, default: Date.now}
});


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