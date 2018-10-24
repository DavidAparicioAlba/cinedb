var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sesionSchema = new Schema({
    pelicula: { type: String, required: [false, 'La pelicula es necesaria'] },
    sala: { type: String, required: [false, 'La sala es necesario'] },
    hora: { type: String, required: [false, 'La hora es necesario'] },
    n_entrada: { type: Number, required: false },
});
var cineSchema = new Schema({
    nombre: { type: String, required: [false, 'La pelicula es necesario'] },
    latitud: { type: String, required: [false, 'La latitud es necesario'] },
    longitud: { type: String, required: [false, 'La longitud es necesario'] },
    direccion: { type: String, required: [false, 'La direccion es necesario'] },
    horario: { type: String },
    sesiones: [sesionSchema]
}, { collection: 'cine' });


module.exports = mongoose.model('Cine', cineSchema);