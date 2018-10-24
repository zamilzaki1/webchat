var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var sever = app.listen(process.env.PORT || 2000,function(){
  console.log('listening on port 2000');
});

// Static files
app.use(express.static('public'));


var io = socket(sever);

io.on('connection',function(socket){
  console.log('user is connect',socket.id);

  socket.on("chat",function(data){
     io.sockets.emit("chat",data);
  });

  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data)
  });

});
