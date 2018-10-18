var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var EntradaSchema = new Schema({ 
                                 cine: 'String',
                                 sala : 'Number',
                                 pelicula : 'String',
                                 fecha : 'String',
                                 hora :'String'
                                });
               
                              
module.exports = mongoose.model('entrada', EntradaSchema,'entrada'); 

