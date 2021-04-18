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
        let reducer = (a, b) => {
            return a + b
        }
        let total = [500]
        for(let i = 0 ; i < productos.length ; i++){
            total.push(Number(productos[i].price))
        }
        let precio = total.reduce(reducer)
        return res.render('productsCart', {productos, precio});
    },
    delete: function (req, res) {

         db.UserProduct.destroy ({
            where: {
                id_product: req.params.id
            }
        })
        .then (function(){
            db.User.findAll({
                where: {
                    id: req.session.usuarioLogueado.id
                },
                include:[{
                    association: 'UserProduct'
                }]})
        .then (function (usuario){
            let reducer = (a, b) => {
                return a + b
            }
            let productos = usuario[0].UserProduct
            let total = [500]
            for(let i = 0 ; i < productos.length ; i++){
                total.push(Number(productos[i].price))
            }
            let precio = total.reduce(reducer)
            console.log(precio)
            return res.render('productsCart', {productos, precio});
        }) 
        })
        .catch(function(e) {
            res.send (e)
        })
    }

}
