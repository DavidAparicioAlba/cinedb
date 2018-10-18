var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sesionChema = new Schema({
    pelicula: { type: String, required: [true, 'La pelicula es necesario'] },
    fecha: { type: String, required: [true, 'La fecha es necesario'] },
    sala: { type: String, required: [true, 'El contenido es necesario'] },
    n_entradas: { type: Number, required: false }
}, { collection: 'sesiones' });


module.exports = mongoose.model('Sesion', sesionChema);

// pelicula: { type: Schema.Types.ObjectId, ref: 'Pelicula' },