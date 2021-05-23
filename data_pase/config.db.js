
const mongoose = require('mongoose');

const debeConection = async() => {

    try {

        await mongoose.connect('mongodb+srv://AndyNic:scEAeLLvnLWwRUEP@cluster0.z1lzq.mongodb.net/apibotejidos', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
});
        console.log('Base de datos Online');

    } catch ( error ) {

        console.log( error );

        throw new Error('Error a la hora de conectar hable con el Encargado');
    };
};

// Export

module.exports = debeConection;