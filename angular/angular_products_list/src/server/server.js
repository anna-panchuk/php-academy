var express = require('express');
var app = express();
var path = require('path');
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');

var jsonFilePath = path.join(__dirname, 'data.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

app.get('/data', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(jsonFilePath);
});

app.post('/add-line', function(req, res) {
    var data = jsonfile.readFileSync(jsonFilePath);
    data.push(req.body);
    jsonfile.writeFileSync(jsonFilePath, data);
    res.send('{"status":1}');
});

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});