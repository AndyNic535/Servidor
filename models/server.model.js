
const express = require( 'express' );
const cors = require( 'cors' );
const debeConection = require('../data_pase/config.db');

class Server{

    constructor() {

        this.app = express();
        this.port = 3001;

        // Rutas paths

        this.paths = {

            tejidos: '/api/tejidos'
        };  

        // TUDU: Conectar a base de datos.

        this.conectdebe();
        
        // Middlewares

        this.middlewares();

        //Rutas

        this.routes();

    };

    async conectdebe() {

        await debeConection();

    };

    middlewares() {

        // Cors

        this.app.use( cors() );

        // Body parse

        this.app.use( express.json() );

        // Public

        this.app.use( express.static('public') );
    };

    routes() {

        this.app.use( this.paths.tejidos, require( '../routes/tejidos.routes' ) );
    };

    listen() {

        this.app.listen( this.port, () => {

            console.clear();

            console.log(`Escuchando en el puerto: ${ this.port }`);

        });
    };
};

// Export

module.exports = Server