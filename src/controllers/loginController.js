const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const db = require ('../database/models/');
const { validationResult } = require('express-validator');


module.exports = {
    log: function(req,res){
    res.render('login');
},
    checkUser: function(req,res){
        db.User.findOne ({
            where: {
                email: req.body.email
            }
        })
        .then (function(usuario){
            if(bcrypt.compareSync(req.body.password, usuario.password)){
                req.session.usuarioLogueado = usuario.id;
                return res.redirect('/')
            }
            else {
                 res.send("error")
            }
            })
},
    logout: function (req,res) {
        req.session.destroy();
        res.redirect('/');
    }
}
