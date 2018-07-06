var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var productDetails = require('./routes/products');
var StudentDetails = require('./routes/stdDetails');
var angularProduct = require('./routes/angulaAjax');
var angularProduct2 = require('./routes/angulaAjax2');
var angularProductMobiles = require('./routes/angularMobiles');
var movies = require('./routes/Bgr_files');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8080,function(){
	console.log("server is listed at 8080")
});
app.use('/', index);
app.use('/users', users);
app.use('/data/products', productDetails);
app.use('/studentDetails', StudentDetails);
app.use('/angularProductDetails', angularProduct);
app.use('/angularProductDetails2', angularProduct2);
app.use('/angularProductDetailsMobiles', angularProductMobiles);
app.use('/getMovieslist',movies);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
