var express = require('express');
var app = express();
var mongoose = require('mongoose');

//create mongodb database on mlab and add connect link below
mongoose.connect('');

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var zarana = Person({
  firstname: 'Zarana',
  lastname: 'Patel',
  address: '1201 s Main St.'
});

// save the user
zarana.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var abcd = Person({
  firstname: 'ABCD',
  lastname: 'defg',
  address: '1201 s Main St.'
});

// save the user
abcd.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;

		// object of all the users
		console.log(users);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);
