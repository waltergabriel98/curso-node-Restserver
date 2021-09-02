const express = require('express');
const cors= require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //MIDDLEWARE;
        this.middlewares();
        //RUTAS DE MI APLICACION
        this.routes();
    }
    middlewares(){
        // cors
        this.app.use(cors());
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto', this.port);
        
        });
    }
}

module.exports = Server;