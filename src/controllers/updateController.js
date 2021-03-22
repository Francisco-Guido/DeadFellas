const db = require ('../database/models/');
const { validationResult } = require('express-validator');
const { array } = require('../middlewares/productMid');

module.exports = {
    detail: function (req, res) {
        db.Product.findByPk (req.params.id)
        .then (function(detail){
            res.render('editarProducto', {detail:detail})
        })
        .catch(function(e) {
            res.send (e)
        })
    },

    update: function(req,res){
    db.Product.findAll()
     .then (function(vistaAdmin){
         res.render('updateProduct', {vistaAdmin:vistaAdmin}) 
     })
},

 delete: function (req, res) {
    db.Product.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
        res.redirect('/updateProduct')
    })
    .catch(function(e){
        res.send(e)
    }) 
},
modificar: function (req, res) {
    let errorsEdit = validationResult(req);
    if(errorsEdit.isEmpty()){
    db.Product.update ({
        name: req.body.name,
        price: req.body.price,
    },{
        where: {
            id : req.params.id
        }
    })
    .then(function(data){
        res.redirect('/updateProduct')
    })
    .catch(function(e){
        res.send(e)
    })
    }else{
        db.Product.findByPk (req.params.id)
        .then(function(detail){
            res.render('editarProducto', {
                errorsEdit: errorsEdit.mapped(), detail:detail
            })
        })
        .catch(function(e){
            res.send(e)
        })
        } 
    
}
}





