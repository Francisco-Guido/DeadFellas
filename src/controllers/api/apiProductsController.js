const db = require('../../database/models')

module.exports = {
    allProducts: function(req,res){
        db.Product.findAll({
            attributes: ['id','name', 'price', 'quantity']
        })
         .then (function(productos){
                 let respuesta = {
                     meta:{
                         status: 200,
                         total: productos.length,
                         url: "/api/product"
                     },
                     data: productos
                 }
                 
                 res.json(respuesta);

             })
        }

    }

