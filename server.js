import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import socketIo from 'socket.io'

import config from './webpack.config';
import api from './src/api/webhook';

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
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

app.post('/talktome', api);
app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const server = app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});

const io = new socketIo(server);

io.on('connection', (socket) => {  
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat', function(data) {
    socket.join(data.username);
  }); 

  socket.on('leaveChat', (data) => {
    socket.leave(data.username)
  });

  socket.on('chatInit', function(data) {
    socket.broadcast.emit('receiveUser', data);
  });

  socket.on('sendMessage', function(data) {
    socket.broadcast.to(data.chat.username).emit('receiveMessage', data);
  });
});