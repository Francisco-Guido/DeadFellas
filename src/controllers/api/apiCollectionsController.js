const db = require('../../database/models')

module.exports = {
    allCollections: function(req,res){
        db.Collection.findAll()
         .then (function(colleciones){
                 let respuesta = {
                     meta:{
                         status: 200,
                         total: colleciones.length,
                         url: "/api/collection"
                     },
                     data: colleciones
                 }
                 res.json(respuesta);
             })
        }
    }

