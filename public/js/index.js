

var socket = io();
    
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Jane@example.com',
        text: 'Hey. This is Adrew',
    });
});

socket.on('newMessage', function (message) {
    console.log('New email: ', message);
});



socket.on('disconnect', function() {
    console.log('Disconnect from server');
});