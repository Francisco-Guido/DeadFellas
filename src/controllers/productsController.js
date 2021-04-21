const db = require ('../database/models/');

module.exports = {
pushProducts: function(req,res){
    db.Product.findAll()
     .then (function(vistaProductos){
         res.render('products', {vistaProductos:vistaProductos}) 
     })
},
detalle: function (req, res) {
    db.Product.findByPk (req.params.id)
    .then (function(detail){
        db.Product.findAll()
        .then(function(detail2){
            res.render('productsDetail', {detail, detail2}) 
    })})
    .catch(function(e) {
        res.send (e)
    })
}
}