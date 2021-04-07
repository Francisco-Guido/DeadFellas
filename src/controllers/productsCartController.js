const db = require ('../database/models/');

module.exports = {
    cart: function(req,res){
        db.Product.findAll()
         .then (function(vistaProductos){
             res.render('productsCart', {vistaProductos:vistaProductos}) 
         })
    }}
