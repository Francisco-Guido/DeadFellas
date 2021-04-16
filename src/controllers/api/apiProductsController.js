const db = require('../../database/models')

module.exports = {
    allProducts: function(req,res){
        db.Product.findAll({
            attributes: ['id','name', 'price', 'quantity', 'description', 'collection_id']
        })
         .then (function(productos){
                 let respuesta = {
                     meta:{
                         status: 200,
                         total: productos.length,
                         url: "/api/product",
                     },
                     data: productos
                 }
                 res.json(respuesta);

             })
            },

    buscarProducto:  function(req, res){
        db.Product.findByPk(req.params.id)
        .then(function(product){
            res.json(product)
        }
        )
    },

    categorias: function (req, res){
        db.Collection.findAll({
            attributes: ['id','name'],
            include: ['products']
        })
        .then(function(categorias){
            for (let i = 0; i < categorias.length; i++) {
                categorias[i].setDataValue('endopoint','api/product/categorias/' + categorias[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: categorias.length,
                    url: '/api/product/categorias',
                },
                data: categorias
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    }

    }

