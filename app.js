var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/success', function(req, res){
  res.render('success');
});

app.post('/submitForm', function(req, res){
  res.redirect('/success');
});

var server = app.listen(4523, function() {
	console.log('Express server listening on port ' + server.address().port);
});
