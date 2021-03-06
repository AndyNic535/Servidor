const { Schema, model } = require( "mongoose" );

const TejidosSchema = Schema({

    img1: {
        type: String,
    },

    img2: {
        type: String
    },

    img3: {
        type: String
    },

    img4: {
        type: String
    },

    img5: {
        type: String
    },

    nombre: {
        type: String,
        required: [ true, "El nombre es obligatorio" ],
    },

    talla: {
        type: String,
        required: [ true, "La talla es obligatoria" ],
        enum:["S", "L", "M", "XL", "XXL"]
    },

    color: {
        type: String
    },

    lana_ocupada: {
        type: String
    },

    punto: {
        type: String
    },

    precio: {
        type: String,
        required: [ true, "El precio es obligatorio" ]
    },

    serial: {
        type: String,
        require: [ true, "La serial es obligatoria" ],
        unique: true
    },

    status: {
        type: Boolean,
        default: true
    }
});

// Export

module.exports = model( "Tejido", TejidosSchema );