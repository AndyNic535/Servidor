const express = require( 'express' );
const cors = require( 'cors' );
const debeConection = require('../data_pase/config.db');

class Server{

    constructor() {

        this.app = express();
        this.port = 3001;

        // Rutas paths

        this.paths = {

            tejidos: '/api/tejidos',
            lanas: '/api/lanas',
            hilos: '/api/hilos',
            palillos: '/api/palillos',
            crochets: '/api/crochets',
            accesorios: '/api/accesorios',
            varios: '/api/varios'
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
        this.app.use( this.paths.lanas, require( '../routes/lanas.routes' ) );
        this.app.use( this.paths.hilos, require( '../routes/hilos.routes' ) );
        this.app.use( this.paths.palillos, require( '../routes/palillos.routes' ) );
        this.app.use( this.paths.crochets, require( '../routes/crochets.routes' ) );
        this.app.use( this.paths.accesorios, require( '../routes/accesorios.routes' ) );
        this.app.use( this.paths.varios, require( '../routes/varios.routes' ) );
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