module.exports = function(req, res, next) {
    if(req.session.usuarioLogueado == true){
        return res.redirect('/')
    }
    next();
    }
