const fs = require("fs");
const path = require("path");
const bcrypt=require("bcrypt"); 


let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios); 



module.exports = {
register: function(req,res){
res.render('register');
},
create: function (req, res){
    usuarios.push({
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 12)
        })    
    fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios));
    res.redirect('/login')
    }
    
}