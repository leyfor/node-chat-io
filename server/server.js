const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, './../public');

const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    // socket.emit('newMessage', {
    //     from: 'mike@example.com',
    //     text: 'Hey, wha is going on',
    //     createAt: 123

    // });

    // Socket on is one CONNECTION. 
    socket.on('createMessage', (message) => {
       console.log('createEmail', message);
       // IO.emit sends event to every connection...
       io.emit('newMessage', {from: message.from, text: message.text, createAt: new Date().getTime()});
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});

//io.on('disc')

server.listen(port, () => {
    console.log (`Server is up on port: ${port}`);
});