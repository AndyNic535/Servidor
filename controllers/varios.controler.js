const { request, response } = require( "express" );

const Vario = require( "../models/varios.models" ); 



const getVarios = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, varios ] = await Promise.all([

        Vario.countDocuments( query ),
        Vario.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        varios
    });
};

const putVarios = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Hecho'
    });
};

const postVarios = async( req = request, res = response ) => {

   const { nombre, talla, marca, grosor, largo, color, material, forma, cantidad, uso, precio, serial } = req.body;

   const varioDB = await Vario.findOne({ serial });

   if ( varioDB ) {
       return res.status( 400 ).json({

        msj: `La serial con el numero ${ varioDB.serial }, ya existe`

       });
   }

   const data = {
       nombre,
       talla,
       marca,
       grosor,
       largo,
       color,
       material,
       forma,
       cantidad,
       uso,
       precio,
       serial
   };

   const vario = new Vario( data );

   await vario.save();

   res.status( 201 ).json({
       vario
   });

};

const deleteVarios = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Hecho'
    });
};

// Exports

module.exports = {
    getVarios,
    putVarios,
    postVarios,
    deleteVarios
};