const db = require('../../database/models')

module.exports = {
    allUsers: function(req,res){
        db.User.findAll({
            attributes: ['id','name', 'surname', 'email', 'avatar']
        })
         .then (function(usuarios){
            for (let i = 0; i < usuarios.length; i++) {
                usuarios[i].setDataValue("endpoint", "/api/user/" + usuarios[i].id)
            }
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
        },
    
    find: function(req, res){
        db.User.findByPk(req.params.id)
        .then(function(user){
            res.json(user)
        }
        )
    }
    }

