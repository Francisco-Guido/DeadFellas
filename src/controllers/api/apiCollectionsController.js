const db = require('../../database/models')

module.exports = {
    allCollections: function(req,res){
        db.Collection.findAll()
         .then (function(collections){
                 let respuesta = {
                     meta:{
                         status: 200,
                         total: collections.length,
                         url: "/api/collections"
                     },
                     data: collections
                 }
                 res.json(respuesta);
             })
        }
    }

