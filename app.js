const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const messages = [
	{
		text: "Hi!",
		user: "Kabirdas",
		added: new Date(),
	},
	{
		text: "Hellow!",
		user: "Sagaree",
		added: new Date(),
	},
];

app.set("messages", messages);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);

module.exports = app;
