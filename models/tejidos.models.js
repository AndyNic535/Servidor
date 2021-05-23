const { Schema, model } = require("mongoose");

const TejidosSchema = Schema({

    nombre: {
        type: String,
        required: [ true, "El nombre es obligatorio" ],
        unique: true
    },

    talla: {
        type: String,
        required: [ true, "La talla es requerida" ],
        enum:["S", "L", "M", "XL", "XXL"]
    },

    precio: {
        type: Number,
        required: [ true, "El precio es requerido" ]
    },

    color: {
        type: String
    },

    img1: {
        type: String,
        required: [ true, "Es obligatoria almenos una imagen" ]
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

    status: {
        type: Boolean,
        default: true
    }
});

// Exports

module.exports = model( "Tejido", TejidosSchema );