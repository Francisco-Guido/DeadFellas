    function carrito(req, res, next) {
        if(req.session.usuarioLogueado == undefined) {
            res.redirect('/login')
        } else {
            next()
        }
    }
    
    module.exports = carrito;