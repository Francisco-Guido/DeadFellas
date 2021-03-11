const db = require ('../database/models/');

module.exports = {
    enviandoProduct: function(req,res){
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
        }), {

        }
        
},
    createProduct: function(req,res){
        res.render('create')
    }
}

