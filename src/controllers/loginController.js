const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs"); 
/* const { send } = require("process"); */

let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    log: function(req,res){
    res.render('login');
},
checkUser: function(req,res){
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
}

}

