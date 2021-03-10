const db = require ('../database/models/');


module.exports = {
    update: function (req, res) {
        db.User.findByPk (req.session.usuarioLogueado)
        .then (function(update){
            res.render('updateUsuario', {update:update})
        })
        .catch(function(e) {
            res.send (e)
        })
    },
    modificar: function (req, res) {
        db.User.update ({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email

        },{
            where: {
                id : req.session.usuarioLogueado
            }
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(e){
            res.send(e)
        })
    }
}