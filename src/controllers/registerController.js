const db = require ('../database/models/');
const bcrypt = require ('bcryptjs');

module.exports = {
        create: function (req, res) {

            res.send (req.body)
            db.User.create ({
                rol: 1,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                repassword: req.body.repassword,
            }, {
                timestamps: false
            })
            },
        register: function (req, res) {
                    res.render ('register')
                },
        login: function (req,res) {
                    res.send(req.body)
                }
            }
