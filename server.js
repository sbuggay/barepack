var express = require('express');
var path = require('path');
var config = require('./config/webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var webpackConfig = webpack(config);

app.use(webpackDevMiddleware(webpackConfig, {noInfo: false, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(webpackConfig));

app.use(express.static('./app'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('./app/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});