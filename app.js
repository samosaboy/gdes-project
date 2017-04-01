// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

//Routes
app.get('/', function(req, res) {
    res.render('index', { title: 'Welcome' });
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.locals.pretty = true

// Set server port
app.listen(4000);
console.log('server is running');