const { Response } = require('express')


const usuariosGet = (req, res = Response) => {
    res.json({
        message: 'get desde el api'
    })
};

const usuariosPost = (req, res = Response) => {
    res.json({
        message: 'post desde el api'
    })
}


const usuariosPut = (req, res = Response) => {
    res.json({
        message: 'put desde el api'
    })
}

const usuariosDelete =  (req, res = Response) => {
    res.json({
        message: 'delete desde el api'
    })
}

const usuariosPatch = (req, res = Response) => {
    res.json({
        message: 'patch desde el api'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}