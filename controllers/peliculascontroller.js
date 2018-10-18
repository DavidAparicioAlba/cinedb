var peliculas = require('../models/peliculas.js');

function consultarTodos(callback){
    peliculas.find(function(err,list){
        if (err){
            return callback(err);
        }
        return callback(null, list);
    });
}

function consultarPorID(id, callback){
    peliculas.findOne({_id: id}, function(err, negocio){
        if(err){
            return callback(err);
        }
            return callback(null, negocio);
    });
}

function altapelicula(pelicula, callback){
    pelicula.save(function(err,alta){
        if(err){
            return callback(err);
        }
        return callback(null, alta);
    })
}

function updatepelicula(id, campo, valor, callback){
    var modificacion = {};
    modificacion[campo] = valor;
    peliculas.findByIdAndUpdate(id, {$set: {modificacion}} , function(err, modificado){
        if(err){
            return callback(err);
        }
        return callback(null, modificado);
    });
}

function borrarpelicula(id, callback){
    peliculas.findByIdAndRemove({_id: id}, function(err, borrado){
        if(err){
            callback(err);
        }
        return callback(null, borrado);
    });
}

module.exports = {
    consultarTodos,
    consultarPorID,
    altapelicula,
    updatepelicula,
    borrarpelicula
}