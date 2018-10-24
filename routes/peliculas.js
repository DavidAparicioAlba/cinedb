var express = require('express');
var router = express.Router();
var pelicula = require('../controllers/peliculascontroller.js');
var Pelicula = require('../models/peliculas.js');

router.get('/', function(req, res) {
    pelicula.consultarTodos(function(err, list) {
        if (req.accepts('json')) {
            if (err) {
                return res.json({ message: 'Error al consultar las peliculas' });
            }
            return res.json({list});
        } else {
            res.send('No acepta JSON')
        }
    });
});

router.get('/add', function(req, res) {
    res.render('añadir')
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    pelicula.consultarPorID(id, function(err, pelicula) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, { message: 'Error al consultar la pelicula' });
            }
            return res.json(pelicula);
        } else {
            res.send('No acepta JSON')
        }
    });
});

router.post('/', function(req, res) {
    console.log('post');
    var nuevaPelicula = new Pelicula({
        'titulo': req.body.titulo,
        'sinopsis': req.body.sinopsis,
        'anio': req.body.anio,
        'director': req.body.director,
        'genero': req.body.genero,
        'caratula': req.body.caratula
    });
    pelicula.altapelicula(nuevaPelicula, function(err, alta) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, { message: 'Error al insertar pelicula' });
            }
            return res.json({ message: 'Pelicula: ' + alta + "  insertada" });
        } else {
            res.send('No acepta JSON');
        }
    });
});
router.put('/:id', function(req, res) {
    var id = req.params.id;
    var campo = req.body.campo;
    var valor = req.body.valor;

    pelicula.updatepelicula(id, campo, valor, function(err, modificada) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, { message: 'Error al actualizar pelicula' });
            }
            return res.json({ message: 'Pelicula: ' + modificada + "  modificada" });
        } else {
            res.send('No acepta JSON');
        }
    })
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;

    pelicula.borrarpelicula(id, function(err, borrada) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, { message: 'Error al borrar pelicula' });
            }
            return res.json({ message: 'Pelicula: ' + borrada + "  borrada" });
        } else {
            res.send('No acepta JSON');
        }
    });
});

module.exports = router;