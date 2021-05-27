const { request, response } = require( "express" );

const Hilo = require( "../models/hilos.models" ); 



const getHilos = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, hilos ] = await Promise.all([

        Hilo.countDocuments( query ),
        Hilo.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        hilos
    });
};

const putHilos = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postHilos = async( req = request, res = response ) => {

   const { nombre, marca, color, lote, precio, serial } = req.body;

   const hiloDB = await Hilo.findOne({ serial });

   if ( hiloDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ hiloDB.serial }, ya existe`

       });
   }

   const data = {
       nombre,
       marca,
       color,
       lote,
       precio,
       serial
   };

   const hilo = new Hilo( data );

   await hilo.save();

   res.status( 201 ).json({
       hilo
   });

};

const deleteHilos = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getHilos,
    putHilos,
    postHilos,
    deleteHilos
};