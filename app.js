// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

//Routes
app.get('/', function(req, res) {
    res.render('index', { title: 'Welcome' });
    res.render('why', { title: 'Why should you care?' });
});
app.set('views', path.join(__dirname));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.pretty = true
app.use('/scripts', express.static(__dirname + '/node_modules/tracking/src/'));

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// Set server port
app.listen(4000);
console.log('server is running');