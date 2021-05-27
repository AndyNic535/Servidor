const { request, response } = require('express');

const  Tejido  = require("../models/tejidos.models");



const getTejidos = async( req = request, res = response ) => {

    const { limit = 20, from = 0 } = req.query;

    const query =  { status: true } 

    const [ total, tejidos ] = await Promise.all([

        Tejido.countDocuments( query ),
        Tejido.find( query )

            .skip( Number( from ) )
            .limit( Number( limit ) )
    ]);

    res.json({
        total,
        tejidos
    });

};

const putTejidos = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Readi'
    });
};

const postTejidos = async( req = request, res = response ) => {

    const { nombre, talla, color, lana_ocupada, punto, precio, serial } = req.body;

    const tejidoDB = await Tejido.findOne({ nombre });

    if ( tejidoDB ) {
        return res.status( 400 ).json({

        msg: `El tejido con el nombre ${ tejidoDB.nombre }, ya existe`

        });
    }

    const data = {
        nombre,
        talla,
        color,
        lana_ocupada,
        punto,
        precio,
        serial
    };

    const tejido = new Tejido( data );

    await tejido.save();

    res.status( 201 ).json({
        tejido
    });
};

const deleteTejidos = ( req = request, res = responset ) => {

    res.json({
        ok: true,
        msj: 'delete Readi'
    });
};

// Exports

module.exports = {
    getTejidos,
    putTejidos,
    postTejidos,
    deleteTejidos
};