function esUsuario(req, res, next) {
    if(typeof req.session.usuarioLogueado == 'undefined') {
        console.log("------------------")
    } else {
        console.log("Okey")
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
    }
    next()
}

module.exports = esUsuario;