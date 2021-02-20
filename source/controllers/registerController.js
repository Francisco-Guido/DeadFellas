const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const multer=require("multer")


let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios); 



module.exports = {
register: function(req,res){
res.render('register');
},
create: function (req, res){
    usuarios.push({
            name: req.body.name,
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