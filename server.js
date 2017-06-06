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
    console.log(docs);
    res.json(docs);
  });
});
//
// app.post('/contactlist', function (req, res){
//   console.log(req.body);
//   db.contactlist.insert(req.body, function(err, doc){
//     res.json(doc);
//   });
// });
//
// app.delete('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });
//
// app.get('/contactlist/:id', function(req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });
//
// app.put('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(req.body.name);
//   db.contactlist.findAndModify({
//     query: {
//       _id:mongojs.ObjectId(id)
//     },
//     update: {
//       $set: {
//         name: req.body.name,
//         email: req.body.email,
//         number: req.body.number
//       }
//     },
//     new: true
//   }, function (err, doc) {
//       res.json(doc);
//     });
// });

app.listen(3000);
console.log('Server running on port 3000');
