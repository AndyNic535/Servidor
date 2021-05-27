const { request, response } = require( "express" );

const Accesorio = require( "../models/accesorios.models" ); 



const getAccesorios = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, accesorios ] = await Promise.all([

        Accesorio.countDocuments( query ),
        Accesorio.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        accesorios
    });

};

const putAccesorios = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postAccesorios = async( req = request, res = response ) => {

   const { nombre, marca, grosor, largo, color, material, forma, cantidad,  precio, serial } = req.body;

   const accesorioDB = await Accesorio.findOne({ serial });

   if ( accesorioDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ accesoriotDB.serial }, ya existe`

       });
   }

   const data = {
       nombre,
       marca,
       grosor,
       largo,
       color,
       material,
       forma,
       cantidad,
       precio,
       serial
   };

   const accesorio = new Accesorio( data );

   await accesorio.save();

   res.status( 201 ).json({
       accesorio
   });

};

const deleteAccesorios = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getAccesorios,
    putAccesorios,
    postAccesorios,
    deleteAccesorios
};