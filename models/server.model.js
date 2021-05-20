const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {};
        
        // Middlewares 
        this.middlewares()
        
        // Routes
        this.routes();
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto', this.port);
        });
    }

    routes() {
        
    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // tatic content
        this.app.use(express.static('public'));
    }

}

module.exports = Server;