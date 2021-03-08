const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const db = require ('../database/models/');
/* const { send } = require("process"); */

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
                return res.send("Los datos ingresados son incorrectos")
            }
            })
},
    logout: function (req,res) {
        req.session.destroy();
        res.redirect('/');
        // res.send('kkkk')
    
    }
}

/* checkUser: function(req,res){
    for(let i = 0; i <usuarios.length; i++){
        if(usuarios[i].email == req.body.email){
            if(bcrypt.compareSync(req.body.password, usuarios[i].password)){
                req.session.usuarioLogueado = true;
                return res.redirect('/')
            } else {
                return res.send("Los datos ingresados son incorrectos")
            }
            
        }
    }
    return res.send("Usuario no registrado")
} */


