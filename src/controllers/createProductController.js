const db = require ('../database/models/');
const { validationResult } = require('express-validator');

module.exports = {
    enviandoProduct: function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Product.create ({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            images: req.files[0].filename
        },{
            timestamps: false
        })
        .then(function(productos){
            productos=productos
            return res.redirect('/updateProduct')
        })
    } else {
        res.render('create', {
            errors: errors.mapped(),
    })
        }
},
    createProduct: function(req,res){
        res.render('products')
    }
}

