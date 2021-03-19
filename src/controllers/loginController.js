const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const db = require ('../database/models/');
const { loginValidation } = require('express-validator');


module.exports = {
    log: function(req,res){
        let errorsLogin=loginValidation(req);
        if(errorsLogin.isEmpty()){
            res.render('login');

        }
       /* else{
            res.render("register",{
                errors:errors.mapped()

            })
        }*/
    
},
    checkUser: function(req,res){
        db.User.findOne ({
            where: {
                email: req.body.email
            }
        })
        .then (function(usuario){
            if(bcrypt.compareSync(req.body.password, usuario.password)){
                req.session.usuarioLogueado = {
                    email:usuario[i].email,
                    avatar:usuario[i].avatar
                };
                return res.redirect('/')
            }
            else {
                res.render("resgister",{
                    errors:errorsLogin.mapped(),
                    old: req.body
                })
                 /*res.send("error, los datos ingresados no coinciden")*/
            }
            })
},
    logout: function (req,res) {
        req.session.destroy();
        res.redirect('/');
    }
}
