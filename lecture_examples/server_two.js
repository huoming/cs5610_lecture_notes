var express = require('express');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var ipaddress = '127.0.0.1';
var port      =  3000;

app.listen(port, ipaddress);

app.use(express.static(__dirname+'/server_side_dev'));

require("./server_side_dev/server.js")(app);

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
