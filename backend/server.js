const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
    cors: "*",
    methods: "*"
});
require('./connection.js')
const User = require('./models/User');
const userRouter = require('./routes/userRouter')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users',userRouter)

server.listen(8080, () =>{
    console.log('Server running at PORT', 8080);
})