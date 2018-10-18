var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sesionSchema = new Schema({
    pelicula: { type: String, required: [false, 'La pelicula es necesaria'] },
    sala: { type: String, required: [false, 'La sala es necesario'] },
    hora: { type: String, required: [false, 'La hora es necesario'] },
    n_entrada: { type: Number, required: false },
});
var cineChema = new Schema({
    nombre: { type: String, required: [false, 'La pelicula es necesario'] },
    lat: { type: String, required: [false, 'La latitud es necesario'] },
    lng: { type: String, required: [false, 'La longitud es necesario'] },
    direccion: { type: String, required: [false, 'La direccion es necesario'] },
    sesiones: [sesionSchema]
}, { collection: 'sesiones' });


module.exports = mongoose.model('Cine', cineChema);