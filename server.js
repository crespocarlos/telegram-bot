var express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    path = require('path'),
    bodyParser = require('body-parser');

let config = require('./webpack.config');

let compiler = webpack(config)
let hotMiddlewareInstance = webpackDevMiddleware(compiler)
let devMiddlewareInstance = webpackHotMiddleware(compiler, {
  publicPath: config.publicPath,
  index: config.indexPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var app = express();
app.use(hotMiddlewareInstance)
app.use(devMiddlewareInstance)

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});