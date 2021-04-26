function esUsuario(req, res, next) {
    if(req.session.usuarioLogueado == undefined) {
        res.redirect('/')
    } else {
        next()
    }
     
        // console.log("Okey")
        // res.locals.usuarioLogueado = req.session.usuarioLogueado;
        // console.log(req.session.usuarioLogueado.id)
    
}

module.exports = esUsuario;