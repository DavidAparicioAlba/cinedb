var express = require('express');
var router = express.Router(),Entrada = require('../models/entrada');




/* GET home page. */
router.get('/', function(req, res, next) {
 
    Entrada.find(function(err, list){ 
         if(req.accepts('json')) { 
           if(err) {           
           return res.json(500, { message: 'Error buscando entradas .'});  
         }  
         
    return  res.json(list); /*se envia */
      }
   }); 
});



router.post('/', function(req, res) { 
let body = req.body;
 var entrada=new Entrada({
       
       'cine': body.cine,
       'sala' :body.sala,
       'pelicula' :body.pelicula,
      'fecha' : body.fecha,
       'hora' : body.hora
  });

     entrada.save(function(err,alta){
         if(req.accepts('json')) { 
                if(err) {           
                   return res.json(500, { message: 'Error en insertar.'});  
                      }        
      
                   return res.send(" ENTRADA INSERTADA "); 
           }

       });// fin de elemnto.save

}); //fin del post

         

router.put('/:id', function(req, res) { 
  let id=req.params.id;
  let peli=req.body.pelicula;
  let salita=req.body.sala;

  Entrada.findByIdAndUpdate(id,{pelicula:peli,sala:salita},function(err,eliminada){ //usamos la funcion de moongose findByIdRemove
       
         if(req.accepts('json')){
          
             if(err){
                 return  res.json(500,{mesagge : "error al modificar la ENTRADA"});
             }
           
                return  res.json({mesagge: "ENTRADA Modificada"});      
          
        
         }else{
             res.send('No acepta Json');
         }
    });
  }); //fin del post
  
  //Eliminar una  Entrada 

router.delete('/:id',function(req,res){ // usamosn la funcion del APIREST delete
  var id=req.params.id;

  Entrada.findByIdAndRemove({_id:id},function(err,eliminada){
       if(req.accepts('json')){
         
           if(err){
               return  res.json(500,{mesagge : "error al Eliminar Tarea"});
           }
         
              return  res.json({mesagge: "ENTRADA Eliminada Corectamente"});      
    
       }else{
           res.send('No acepta Json');
       }
  });
});

module.exports = router;