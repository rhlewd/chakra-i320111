var express = require('express');
var app = express();

app.use(express.static(__dirname + "/view"));
var url = require('url') ;
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

var url = 'mongodb://127.0.0.1:27017/chakraDB';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/borrowersList', function (req, res) {
   //console.log("Got a GET request for the homepage");
   
   MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server.");
  
  var collection = db.collection('borrowers'); 
    
  collection.find().toArray(function(err, results) {
    
  console.log(results);	    
  var borrowers = {
	  'results' : results
  }
  
  res.setHeader('Content-Type', 'application/json');
	res.send(borrowers);
  });	  
	});
	
})



// This responds a POST request for the homepage
app.post('/borrowerInsert', function (req, res) {
	
	MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server.");
  
  var collection = db.collection('borrowers'); 
	
	var post_data = req.body;
	
	collection.insertOne({
	  'ID' : 1,
	  'MinAmt' : 2
  });
	/*collection.insertOne({
	  'ID' : post_data.ID,
	  'Amount' : post_data.Amount,
	  'Emi' : post_data.Emi,
	  'Start Date' : post_data.start_date,
	  'End Date' : post_data.end_date,
	  'MinAmt' : post_data.min_amt
  });*/
  
	//res.setHeader('Content-Type', 'application/json');
	res.send("success");
  
	console.log(post_data.ID);
   
   });
})


var server = app.listen(process.env.PORT,process.env.IP, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
