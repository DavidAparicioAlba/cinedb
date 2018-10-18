var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 //mongoose.connect('mongodb://localhost/NegociosBd'); 
 var CineSchema = new Schema({ 
                                 nombre: 'String',
                                 direccion: 'String',
                                 lat: 'String',
                                 lon: 'String',
                                 cartelera: Array<Sesiones>=[]
                                });
               
                              
module.exports = mongoose.model('cine', EntradaSchema,'cine'); 
