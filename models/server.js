const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';

        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use( cors() );
        this.app.use( express.json() ); // transforma toda la info que llega a JSON
        this.app.use( express.static('public') )
    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Puerto ' + this.port);
        })
    }
}



module.exports = Server;