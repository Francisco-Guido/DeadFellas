function esUsuario(req, res, next) {
    if(req.session.usuarioLogueado == undefined) {
        res.redirect('/')
    } else {
        next()
    }
}

module.exports = esUsuario;