var express = require('express');
var app = express();

var ipaddress = '127.0.0.1';
var port      =  3000;

app.listen(port, ipaddress);


app.get('/', function(req, res){
    res.send('hello world hello world hello world hello world !');
});

app.get('/getData', function(req, res){
    var msg = {data:"hello data!"};
    res.json(msg);
});

var users = [
    {username: "Alex"},
    {username: "Bob"},
    {username: "Charlie"},
];

var test_data_format = "i am not json";

app.get('/getUsers/send', function(req, res){
    res.send(users);
});

app.get('/getUsers/json', function(req, res){
   res.json(users);
});

app.get('/rest/test/data/format', function(req, res){
    res.json(test_data_format);
});

app.get("/getUsers/:index", function(req, res){
    console.log("server side get user by index...");
    var index = req.params["index"];

    res.send(users[index]);
});

var courses = [
    {"id":"001", "title": "Java 101", "seats": 12, "starts": "3/2/2016"},
    {"id":"002","title": "Node.js 101", "seats": 12, "starts": "2/3/2016"},
    {"id":"003","title": "C# 101", "seats": 12, "starts": "3/9/2016"},
    {"id":"004","title": "ASP.NET 101", "seats": 12, "starts": "3/10/2016"}
];

app.get("/rest/course", function(req, res){
    console.log("server side get all courses...");
    res.send(courses);
});

app.use(express.static(__dirname+'/server_side_dev'));