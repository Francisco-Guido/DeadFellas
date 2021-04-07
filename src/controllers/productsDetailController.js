const db = require ('../database/models/');

module.exports = {
    detail: function(req,res){
        db.Product.findAll()
         .then (function(vistaProductos){
             res.render('productsDetail', {vistaProductos:vistaProductos}) 
         })
    },

    comprar: function (req, res) {
        db.Product.findByPk (req.params.id)
        .then (function(producto){
            res.render('productsCart', {producto:producto})
        })
        .catch(function(e) {
            res.send (e)
        })
    }
}
