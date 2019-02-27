var createError = require('http-errors');
var express = require('express');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const goRouter = require('./routes/go');
const mainRouter = require('./routes/main')
const signinRouter = require('./routes/siginin')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//路由
app.use('/go',goRouter);
app.use('/main',mainRouter);
app.use('signin',signinRouter);

app.listen(8080);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
