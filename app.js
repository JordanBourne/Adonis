var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

require('dotenv').config()

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/v1', routes);

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.json({code: 'UNCAUGHT_EXCEPTION', message: err});
});

app.listen(3000, function() {
	console.log('hello world');
})
