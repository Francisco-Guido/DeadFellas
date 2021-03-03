const db = require ('../database/models/');

module.exports = {
        create: function (req, res) {

            res.send (req.body)
            db.User.create ({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
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
