
const { request, response } = require('express');

const { Tejido } = require("../models/tejidos.models");

const getTejidos = ( req = request, res = response ) => {

    res.json({
        msj: "eo"
    });
};

const putTejidos = ( req = request, res = response ) => {

    res.json({
        ok: true,
        msj: 'put Readi'
    });
};

const postTejidos = async( req = request, res = response ) => {

    const { nombre, talla, precio} = req.body;

    const tejidoDB = await Tejido.findOne({ nombre });

    if ( tejidoDB ) {
        return res.status( 400 ).json({

        msg: `El tejido con el nombre ${ tejidoDB.nombre }, ya existe`

        });
    }

    const data = {
        nombre,
        talla,
        precio
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

// Export

module.exports = {

    getTejidos,
    putTejidos,
    postTejidos,
    deleteTejidos
};