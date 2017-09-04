var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));
app.use('/v1', routes);

app.use(function(err, req, res, next) {
    res.status(err.status || 500).json(err);
});

app.listen(3000, function() {
	console.log('hello world');
})