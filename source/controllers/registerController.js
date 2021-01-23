const fs = require("fs");
const path = require("path");
const bcrypt=require("bcrypt");
const multer=require("multer")


let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios); 



module.exports = {
register: function(req,res){
res.render('register');
},
create: function (req, res){
    usuarios.push({
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            avatar: req.file.filename
        })    
    fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios));
    res.redirect('login')
    },

    /* checkUser: function(req,res){
        res.send(req.body.password)
    } */
    
}