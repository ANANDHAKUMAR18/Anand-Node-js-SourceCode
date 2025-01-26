var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve the static HTML file
});

app.get('/will', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'will.html'));  // Serve the will.html file
});

app.listen(process.env.PORT || 3000);
module.exports = app;
