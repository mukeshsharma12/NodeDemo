var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('./config/cors');
var path = require('path');
var indexRouter = require('./routes/index');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors.permission);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

var PORT = 7000;

// set the view engine to ejs
app.set('view engine', 'ejs');

var partnersData;

app.get('/', function(req, res) {
  var options = {
    method: 'POST',
    uri: 'http://localhost:7000/api/v1/getAllRequestsData',
    json: true,    
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'charset': 'utc-8'
    }
  };
  request(options, function (error, response, body) {  
    if (response.statusCode == 200 && response.body.status == 'success') {
      partnersData = response.body.data;
      res.render('pages/index', {partnersData: partnersData});
    } else {
      res.render('pages/index', {partnersData: []});
    }
  });

});


app.post('/',function(req,res){

  var options = {
    method: 'POST',
    uri: 'http://localhost:7000/api/v1/getAllRequestsData',
    json: true,
    body: {
        "startDate": req.body.startDate,
        "endDate": req.body.endDate
    },    
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'charset': 'utc-8'
    }
  };

  request(options, function (error, response, body) { 
    console.log("DATA=="+JSON.stringify(response)); 
    if (response.statusCode == 200 && response.body.status == 'success') {
      partnersData = response.body.data;
      res.render('pages/index', {partnersData: partnersData});
    } else {
      res.render('pages/index', {partnersData: []});
    }
  });
     
});


app.listen(PORT);
console.log(PORT,' running server port.');