const db = require ('../database/models/');

module.exports = {
    detail: function(req,res){
        db.Product.findAll()
         .then (function(vistaProductos){
             res.render('productsDetail', {vistaProductos:vistaProductos}) 
         })
    }}
