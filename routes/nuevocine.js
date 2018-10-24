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
        latitud: body.latitud,
        longitud: body.longitud,
        direccion: body.direccion,
        horario: body.horario
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


// Añadir Sesiones de Cine
router.put('/sesiones/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    console.log(body);

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

        
        Cine.find({'cine.sesiones': {$elemMatch: {_id:body.id}}}).exec((err,sesion) =>{
            if(err) {
                res.status(500).json({
                    err: err
                });
            }
            if(!sesion){
                cine.sesiones.push({
                    pelicula: body.pelicula,
                    sala: body.sala,
                    hora: body.hora,
                    n_entrada:20
                });
            }
            if (sesion){
                Cine.updateOne(
                    {_id: id, "sesiones._id": body._id},
                    { $set: { "sesiones.$.n_entrada" : body.n_entrada } }
                ).exec((err,update)=>{
                    console.log(update);
                });
                console.log(sesion);
            }
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

// Modificar una sesion

router.put('/sesion/:id', (req, res) => {
let id = req.params.id;
    let body = req.body;
});

module.exports = router;