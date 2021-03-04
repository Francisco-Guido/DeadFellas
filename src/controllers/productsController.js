const db = require ('../database/models/');

module.exports = {
pushProducts: function(req,res){
    db.Product.findAll()
     .then (function(vistaProductos){
         res.render('products', {vistaProductos:vistaProductos}) 
     })
}}