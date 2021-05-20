const express = require('express');
const cors = require('cors');
const { socketController } = require('../controllers/socket.controller');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {};
        
        // Middlewares 
        this.middlewares()
        
        // Routes
        this.routes();

        // Sockets
        this.sockets();
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }

    routes() {
        
    }

    sockets() {
        this.io.on('connection', socketController);
    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // tatic content
        this.app.use(express.static('public'));
    }

}

module.exports = Server;