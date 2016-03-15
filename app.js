//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var app = express();
//
//var isDevelopment = (process.env.NODE_ENV !== 'production');
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
//
//// uncomment after placing your favicon in /public
////app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(require('less-middleware')(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (isDevelopment) {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;


var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');
var build_path = path.join(__dirname, 'build');

app.use(express.static(static_path))
    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: build_path
      });
    }).listen(process.env.PORT || 8080, function (err) {
  if (err) { console.log(err) };
  console.log('Listening at localhost:8080');
});

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}