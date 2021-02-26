/* const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const multer=require("multer"); */


/* let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios); */ 


//  module.exports = {
//  register: function(req,res){
//  res.render('register');
//  },
//  create: function (req, res){
//      usuarios.push({email: req.body.email,
           /*  password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            active: req.body.active,
            admin: req.body.admin
        }).then((user) => res.status(201).send(user)).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    }
}); */
//              name: req.body.name,
//              email:req.body.email,
//              password: bcrypt.hashSync(req.body.password, 12),
//              /* avatar: req.file.filename */
//         })    
//      /* fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios)); */
//      res.redirect('login')
//      },

//      checkUser: function(req,res){
//          res.send(req.body.password)
//     } 
    
//  }

const db = require ('../database/models');

module.exports = {
    create: function (req, res) {

        res.send (req.body)
        // db.User.create ({
        //     name: req.body.name,
        //     surname: null,
        //     email: req.body.email,
        //     password: req.body.password,
        //     repassword: null,
        //             })
        //             .then(function(data){
        //                 // res.redirect('/')
        //                 res.send(data)
        //             })
        //             .catch (function(e){
        //                 res.send(e)
        //             })
                },
                register: function (req, res) {
                    res.render ('register')
                },
                login: function (req,res) {
                    res.send(req.body)
                }
            }

