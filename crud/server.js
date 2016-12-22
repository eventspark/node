console.log('May Node be with you');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var db;

MongoClient.connect('mongodb://tutorial:test1234@ds141098.mlab.com:41098/chat-message', (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(3000, () => {
		console.log('listening on 3000');
	});
});

app.get('/', (req, res) => {
	var cursor = db.collection('quotes').find();
	cursor.toArray(function(err, result) {
		if (err) return console.log(err);
		res.render('index.ejs', {quotes: result});
		// console.log(results);
	});

	// res.send('Hello World');
	// res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
	})
	// console.log(req.body);
});


// // app.get('/', function (req, res) {
// // 	res.send('Hello World');
// // });