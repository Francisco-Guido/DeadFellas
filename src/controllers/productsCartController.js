const db = require ('../database/models/');

module.exports = {
    cart: function(req,res){
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
        return res.render('productsCart', {productos, precio});
    }) 

    .catch(function(e) {
        res.send (e)
    })
    }}
