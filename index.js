var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      socket.broadcast.emit('chat message', msg);
      console.log('message: ' + msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});