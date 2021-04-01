function esUsuario(req, res, next) {
    if(typeof req.session.usuarioLogueado == 'undefined') {
        console.log("------------------")
    } else {
        console.log("Okey")
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
        console.log(req.session.usuarioLogueado.id)
    }
    next()
}

module.exports = esUsuario;