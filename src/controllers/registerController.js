const db = require ('../database/models/');
const bcrypt = require ('bcryptjs');
const { validationResult } = require('express-validator');


module.exports = {
        create: function (req, res) {
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.User.create ({
                    rol: 1,
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    avatar: req.files[0].filename
                }, {
                    timestamps: false
                })
                .then(function(usuario){
                    req.session.usuarioLogueado = usuario.id;
                    return res.redirect('/')
                })
                .catch(function(e){
                    res.send("mal")
                })
            } else {
                res.render('register', {
                    errors: errors.mapped(),
            })
            }},
        register: function (req, res) {
                    res.render ('register')
                },
        login: function (req,res) {
                    res.send(req.body)
                }
            }
