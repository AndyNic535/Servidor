
const { request, response } = require('express');



const getTejidos = ( res = response, req = request ) => {

    res.json({
        msj: "eo"
    });
};

const putTejidos = ( res = response, req = request ) => {

    res.json({
        ok: true,
        msj: 'put Readi'
    });
};

const postTejidos = ( res = response, req = request ) => {

    res.json({
        ok: true,
        msj: 'post Readi'
    });
};

const deleteTejidos = ( res = response, req = request ) => {

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