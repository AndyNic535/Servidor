const { request, response } = require( "express" );

const Palillo = require( "../models/palillos.models" ); 



const getPalillos = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, palillos ] = await Promise.all([

        Palillo.countDocuments( query ),
        Palillo.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        palillos
    });
};

const putPalillos = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postPalillos = async( req = request, res = response ) => {

   const { nombre, marca, numero, largo, material, forma, precio, serial } = req.body;

   const palilloDB = await Palillo.findOne({ serial });

   if ( palilloDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ palilloDB.serial }, ya existe`

       });
   }

   const data = {
       nombre,
       marca,
       numero,
       largo,
       material,
       forma,
       precio,
       serial
   };

   const palillo = new Palillo( data );

   await palillo.save();

   res.status( 201 ).json({
       palillo
   });

};

const deletePalillos = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getPalillos,
    putPalillos,
    postPalillos,
    deletePalillos
};