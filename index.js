'use strict';

var express = require('express'),
    config  = require('./config');

var app = express();
app.use(express.compress());
app.use(express.bodyParser());
app.use(function (req, res, next) {
  res.removeHeader('X-Powered-By');
  next();
});
app.use(express.static(__dirname + '/logos/' + config.logo_type, {
  maxAge: 8640000000
}));

console.log('serving logos on ' + config.port);
app.listen(config.port);
