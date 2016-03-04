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



/*
 app.get('/', function(req, res){
 res.send('hello world!');
 });

 app.get('/getData', function(req, res){
 var msg = {data:"hello data!"};
 res.send(msg);
 });

 app.get('/getUsers', function(req, res){
 var users = [
 {username: "Alex"},
 {username: "Bob"},
 {username: "Charlie"},
 ];
 res.send(users);
 });*/