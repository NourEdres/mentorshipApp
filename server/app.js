require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const mongoose = require('mongoose');
const codeBlockRouter = require('./router/codeBlockRouter');

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.use('/api/codeblocks', codeBlockRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('updateCode', (data) => {
        socket.broadcast.emit('codeUpdated', data.code);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT; 
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});
