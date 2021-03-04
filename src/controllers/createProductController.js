const db = require ('../database/models/');

module.exports = {
    enviandoProduct: function(req,res){

        res.send (req.body)
        db.Product.create ({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            // collection_id: req.body.collection_id
        }, {

        })
        
},
    createProduct: function(req,res){
        res.render('create')
    }
}

