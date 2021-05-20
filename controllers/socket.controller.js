const socketController = (socket) => {
    // console.log('client connected');

    socket.on('disconnect', () => {
        // console.log('client disconnected');
    });

    socket.on('client-message', (payload, callback) => {
        const confirm = 'message sent';
        callback(confirm);
        
        socket.broadcast.emit('server-message', payload);
    });
};

module.exports = {
    socketController
}