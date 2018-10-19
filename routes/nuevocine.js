var express = require('express');
var router = express.Router();
var Cine = require('../models/cine2');


/* GET CINES. */
router.get('/', function(req, res, next) {
    Cine.find()
        .exec((err, cines) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear Cine',
                    errors: err
                });
            }

            if (!cines) {
                return res.status(404).json({
                    ok: false,
                    mensaje: 'No existe el cines un bbdd',
                });
            }

            res.status(200).json({
                ok: true,
                cines: cines
            });
        });
});

// GET CINES por ID

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Cine.findById(id, (err, cine) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear Cine',
                errors: err
            });
        }

        if (!cine) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error no existe el cine en bbdd'
            });
        }

        res.status(200).json({
            status: true,
            cine
        });


    });
});


// añadir CINE

router.post('/', (req, res) => {
    let body = req.body;
    console.log(body);
    const cine = new Cine({
        nombre: body.nombre,
        lat: body.lat,
        lng: body.lng,
        direccion: body.direccion
    });



    cine.save((err, cineGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear Cine',
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            cine: cineGuardado
        });
    });
});


// Modificar Sesión de Cine
router.put('/sesiones/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Cine.findById(id, (err, cine) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear Cine',
                errors: err
            });
        }

        if (!cine) {
            return res.status(404).json({
                ok: false,
                mensaje: 'No existe el cine con este ID',
            });
        }

        cine.sesiones.push({
            pelicula: body.pelicula,
            sala: body.sala,
            hora: body.hora,
            n_entrada: 20
        });

        cine.save((err, cineGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear Cine',
                    errors: err
                });
            }

            res.status(200).json({
                status: true,
                cine: cineGuardado

            });
        });




    });
});


module.exports = router;