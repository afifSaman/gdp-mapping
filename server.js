var express = require('express');
var app = express();
var mongojs = require('mongojs');
//which database and collection we use
var db = mongojs('gdp', ['countries']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

// this set url to our index page
// app.get('/', function(req, res) {
//   res.send("Hello world")
// });

app.get('/countries', function (req, res) {
  console.log("I received a GET request");
  // using mangojs
  db.countries.find(function(err,docs) {
    res.json(docs);
  });
});

app.listen(3000);
console.log('Server running on port 3000');
