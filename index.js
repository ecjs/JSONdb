var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

app.post('/api/:name', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  fs.writeFile('./JSON/' + req.params.name + '.json', JSON.stringify(req.body), function(err) {
      if (err) throw err;
      console.log('written: ' + req.params.name);
    });
  res.json(req.body);
});

var jsonFile;

app.get('/api/:name', function(req, res) {
  fs.readFile('./JSON/' + req.params.name + '.json', 'utf-8', function(err, data) {
    if (err) console.log(err);
    jsonFile = JSON.parse(data);
    res.json(jsonFile);
  });
});

app.get('/api/', function(req, res) {
  res.write('it worked!');
  res.sendStatus(200);
});

app.listen(port);
console.log('listening on port : ' + port);
