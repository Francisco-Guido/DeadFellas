const db = require('../../database/models')

module.exports = {
    allUsers: function(req,res){
        db.User.findAll()
         .then (function(usuarios){
                 let respuesta = {
                     meta:{
                         status: 200,
                         total: usuarios.length,
                         url: "/api/user"
                     },
                     data: usuarios
                 }
                 
                 res.json(respuesta);

             })
        }

    }

