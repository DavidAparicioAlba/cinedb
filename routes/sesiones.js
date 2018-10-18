var express = require('express');
var router = express.Router();
var Sesion = require('../models/sesion');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        status: true,
        message: 'Bienvenido a las sesiones'
    });
});

router.post('/', (req, res) => {
    body = req.body;

    const sesion = new Sesion({
        pelicula: body.pelicula,
        fecha: body.fecha,
        sala: body.sala,
        n_entradas: 20
    });

    sesion.save((err, sesionGuardada) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear Sesion',
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            sesion: sesionGuardada
        });
    });
});

module.exports = router;