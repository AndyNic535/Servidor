const { Schema, model } = require( "mongoose" );

const AccesoriosSchema = Schema({

    img1: {
        type: String
    },

    img2: {
        type: String
    },

    nombre: {
        type: String,
        required: [ true, "El nombre es obligatorio" ]
    },

    marca: {
        type: String
    },

    grosor: {
        type: String
    },

    largo: {
        type: String
    },

    color: {
        type: String
    },

    material: {
        type: String
    },

    forma: {
        type: String
    },

    cantidad: {
        type: String
    },

    precio: {
        type: String,
        required: [ true, "El precio es obligatorio" ]
    },

    serial: {
        type: String,
        unique: true
    },

    status: {
        type: Boolean,
        default: true
    }
});

// Export

module.exports = model( "Accesorio", AccesoriosSchema );