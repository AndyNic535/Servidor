const { Schema, model } =  require("mongoose");

const LanasSchema = Schema({

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
        type: String,
        required: [ true, "La marca es obligatoria" ]
    },

    color: {
        type: String,
        required: [ true, "El color es obligatorio" ]
    },

    lote: {
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

module.exports =  model( "Lana", LanasSchema );