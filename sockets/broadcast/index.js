const app = require('express')();
const http = require('http').Server(app);
const port = 3001;
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
    let filename = "index.html";
    let options = {
        root: path.join(__dirname)
    }

    res.sendFile(filename, options);
});

let users = 0;
io.on('connection', (socket) => {
    console.log(`A user has been connected`);
    users++;

    // global broadcat
    // io.sockets.emit('broadcast', { message: `${users} users has been connected` });

    // current user showing welcome message | other connected will showing num of connections
    socket.emit('mycustomevent', { message: 'Welcome Dear!' });
    socket.broadcast.emit('mycustomevent', { message: `${users} has been connected` });

    socket.on('disconnect', () => {
        users--;

        // global broadcat
        // io.sockets.emit('broadcast', { message: `${users} users has been disconnected` });
        socket.broadcast.emit('mycustomevent', { message: `${users} has been disconnected` });
        console.log(`A user has been disconnected.`);
    });
});

http.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
