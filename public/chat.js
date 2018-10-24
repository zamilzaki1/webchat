// connection client
var socket = io.connect("localhost");

//
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback= document.getElementById('feedback');

    // Evvents

    message.addEventListener('keypress',function(){
      socket.emit('typing', handle.value);
    });
    socket.on('typing',function(data){
      feedback.innerHTML = '<p><em>' + data + 'is typing a message.....</em></p>';
    });
    btn.addEventListener("click", function(){
      socket.emit("chat", {
        message: message.value,
        handle: handle.value
      });
});




//Listen of events
socket.on("chat",function(data){
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});
