var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next({status: 404});
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  res.json({error: true});
});

module.exports = app;
