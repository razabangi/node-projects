const app = require('express')();
const http = require('http').Server(app);
const port = 3002;
const path = require('path');
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    const filename = "index.html";
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile(filename, options);
});

io.on('connection', (socket) => {
    console.log(`A user has been connected.`);

    // Send message from server to client
    // setTimeout(() => {
    //     socket.send(`This is message from server.`);
    // }, 3000);

    // Create custom events
    // Send message from server to client
    // setTimeout(() => {
    //     socket.emit('mycustomevent', { message: 'Hi how are you from server.' });
    // }, 3000);

    // Receive message from client to server
    socket.on('mycustomevent', (data) => {
        console.log(data.message);
    });

    socket.on('disconnect', () => {
        console.log(`A user has been disconnected.`);
    });
});

http.listen(port, () => {
    console.log(`server is running on port ${port}`);
});