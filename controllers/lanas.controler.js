const { request, response } = require( "express" );

const Lana = require( "../models/lanas.models" );



const getLanas = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, lanas ] = await Promise.all([

        Lana.countDocuments( query ),
        Lana.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        lanas
    });
};

const putLanas = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postLanas = async( req = request, res = response ) => {

   const { nombre, marca, color, lote, precio, serial } = req.body;

   const lanaDB = await Lana.findOne({ serial });

   if ( lanaDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ lanaDB.serial }, ya existe`

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

   const lana = new Lana( data );

   await lana.save();

   res.status( 201 ).json({
       lana
   });

};

const deleteLanas = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getLanas,
    putLanas,
    postLanas,
    deleteLanas
};