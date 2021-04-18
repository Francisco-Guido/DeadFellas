const db = require ('../database/models/');

module.exports = {
    detail: function(req,res){
        db.Product.findAll()
         .then (function(vistaProductos){
             res.render('productsDetail', {vistaProductos:vistaProductos}) 
         })
    },
    comprar: async function (req, res) {
        let productoAgregado = await db.UserProduct.create ({
            id_user: req.session.usuarioLogueado.id,
            id_product: req.params.id
        })
        let usuario = await db.User.findAll({
            where: {
                id: req.session.usuarioLogueado.id
            },
            include:[{
                association: 'UserProduct'
            }]
        })
        let productos = usuario[0].UserProduct
        return res.render('productsCart', {productos});
    }
}
