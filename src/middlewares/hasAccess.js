function hasAccess(req, res, next) {
    if(req.session.usuarioLogueado != undefined) {
        res.locals.usuarioLogueado = req.session.usuarioLogueado;

    }
    next()

     
        // console.log("Okey")
        // console.log(req.session.usuarioLogueado.id)
    
}

module.exports = hasAccess;