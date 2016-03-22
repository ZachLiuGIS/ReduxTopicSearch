var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var cors = require('cors');

var app = new (require('express'))();
var port = 3004;

var compiler = webpack(config);
//app.use('/dist');
app.use(cors());

app.use('/', express.static('public'));
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath, stats: {colors: true}}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});


