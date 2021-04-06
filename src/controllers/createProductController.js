const db = require ('../database/models/');
const { validationResult } = require('express-validator');

module.exports = {
    enviandoProduct: function(req,res){
        let errorsCreate = validationResult(req);
        if(errorsCreate.isEmpty()){
        db.Product.create ({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            images: req.files[0].filename,
            collection_id: req.body.coleccion
        },{
            timestamps: false
        })
        .then(function(productos){
            productos = productos
            return res.redirect('/updateProduct')
        })
    } else {
        res.render('create', {
            errorsCreate: errorsCreate.mapped(),
    })
        }
},
createProduct: function (req, res) {
    db.Collection.findAll().then(function (coleccion) {
        return res.render("create", { coleccion })  
})
}
}