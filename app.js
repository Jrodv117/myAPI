const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

mongoose.connect('mongodb://localhost:27017/wikiDB');

const articleSchema = {
	title: String,
	content: String,
};

const Article = mongoose.model('Article', articleSchema);

app.use(express.static('public'));

app.listen(3000, () => {
	console.log('run server, run');
});
