var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// modificacion
var peliculasSchema = new Schema({
    titolo: 'String',
    sinopsis: 'String',
    anio: 'String',
    director: 'String',
    genero: 'String',
    caratula: 'String'
});

module.exports = mongoose.model('peliculas', peliculasSchema, 'peliculas');