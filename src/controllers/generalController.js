const db = require ('../database/models/');

module.exports = {
    index: function(req,res){
        db.Product.findAll()
         .then (function(vistaProductos){
             res.render('index', {vistaProductos:vistaProductos}) 
         })
    }
}








