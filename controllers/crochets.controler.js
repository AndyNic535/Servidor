const { request, response } = require( "express" );

const Crochet = require( "../models/crochets.models" ); 



const getCrochets = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, crochets ] = await Promise.all([

        Crochet.countDocuments( query ),
        Crochet.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        crochets
    });
};

const putCrochets = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postCrochets = async( req = request, res = response ) => {

   const { nombre, marca, numero, largo, material, forma, precio, serial } = req.body;

   const crochetDB = await Crochet.findOne({ serial });

   if ( crochetDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ crochetDB.serial }, ya existe`

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

   const crochet = new Crochet( data );

   await crochet.save();

   res.status( 201 ).json({
       crochet
   });

};

const deleteCrochets = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getCrochets,
    putCrochets,
    postCrochets,
    deleteCrochets
};