module.exports = function(req, res, next) {
    req.session.usuarioLogueado = true;
    console.log(req.session.usuarioLogueado);
    next()
}