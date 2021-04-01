const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const db = require ('../database/models/');
const { validationResult } = require('express-validator');

module.exports = {
    log: function(req,res){
        {
            res.render('login');
        }
        },
        checkUser: function(req,res){
            const errorsLogin = validationResult(req);
            if(errorsLogin.isEmpty()){
            db.User.findOne ({
                where: {
                    email: req.body.email,
                }
            })
            .then (function(usuario){
                if(usuario){
                    if(bcrypt.compareSync(req.body.password, usuario.password)){
                        req.session.usuarioLogueado = {
                            id: usuario.id,
                            email:usuario.email,
                        };
                        return res.redirect('/')
                    } else {
                        res.render('login', {
                            errorsLogin: errorsLogin.mapped(),
                    })
                    }
                } else {
                    res.render('login', {
                        errorsLogin: errorsLogin.mapped(),
                })
                }
           
            })
            } else {
                res.render('login', {
                    errorsLogin: errorsLogin.mapped(),
            })
            }
            },
            logout: function (req,res) {
            req.session.destroy();
            res.redirect('/');
        }
}
