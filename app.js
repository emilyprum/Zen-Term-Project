const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); //hello I am new

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/color', function(req,res) {
    res.sendFile(__dirname + '/public/client.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/admin.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    //socket = one client
    //socketIO.sockets = all clients

    // these are the functions that get passed.. this passes in the color
    socket.on('Hello', function(data) {  
        console.log('hi');
        var message = "Hello"
        socketIO.sockets.emit('chat message', message);
        
    });

    socket.on('HowDay', function(data) {  
        console.log('working');
        var message = "How was your day?"
        
        socketIO.sockets.emit('chat message', message);
        
    });

    socket.on('Feeling', function(data) {  
        console.log('working');
        var message = "How are you feeling?"
        
        socketIO.sockets.emit('chat message', message);
        
    });

   
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);