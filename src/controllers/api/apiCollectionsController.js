const db = require('../../database/models')

module.exports = {
    allCollections: function(req,res){
        db.Collection.findAll({
            attributes: ['id','name']
        })
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

