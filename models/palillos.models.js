const { Schema, model } = require( "mongoose" );

const PalillosSchema = Schema({

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

    numero: {
        type: String,
        required: [ true, "El numero es obligatorio" ]
    },

    largo: {
        type: String,
        required: [ true, "El largo es obligatorio" ]
    },

    material: {
        type: String,
        required: [ true, "El material es obligatorio" ]
    },

    forma: {
        type: String,
        require: [ true, "La forma es obligatoria" ]
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

module.exports = model( "Palillo", PalillosSchema );