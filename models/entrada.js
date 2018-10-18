var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 //mongoose.connect('mongodb://localhost/NegociosBd'); 
 var EntradaSchema = new Schema({ 
                                 comprada: 'String',
                                 correo: 'String',
                                 cine: 'String',
                                 pelicula: 'String',
                                 sesion: 'String',
                                });
               
                              
module.exports = mongoose.model('entrada', EntradaSchema,'entrada'); 

