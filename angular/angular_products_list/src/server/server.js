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
    var last = 0;
    var line = req.body;

    if (data.length) {
        var index = data.length - 1;
        last = data[index].id;
    }

    last++;
    line['id'] = last;

    data.push(line);
    jsonfile.writeFileSync(jsonFilePath, data);
    res.send('{"status":1}');
});

app.post('/edit-line/:id', function(req, res) {
    var id = req.params.id;
    var data = jsonfile.readFileSync(jsonFilePath);
    var line = req.body;

    if (data.length) {
        var i;
        for(i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data[i] = line;
                jsonfile.writeFileSync(jsonFilePath, data);
                break;
            }
        }
    }

    res.send('{"status":1}');
});

app.get('/get-line/:id', function(req, res) {
    var id = req.params.id;
    var data = jsonfile.readFileSync(jsonFilePath);

    if (data.length) {
        var i;
        for(i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                res.send(data[i]);
                return;
            }
        }
    }

    res.send('{}');
});

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});