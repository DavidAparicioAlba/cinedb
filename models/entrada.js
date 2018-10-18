var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 //mongoose.connect('mongodb://localhost/NegociosBd'); 
 var EntradaSchema = new Schema({ 
                                 cine: 'String',
                                 sala : 'String',
                                 pelicula : 'String',
                                 fecha : 'String'
                                });
               
                              
module.exports = mongoose.model('entrada', EntradaSchema,'entrada'); 

