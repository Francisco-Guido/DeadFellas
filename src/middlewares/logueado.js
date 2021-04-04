module.exports = function(req, res, next) {
    if(req.session.usuarioLogueado == true){
        console.log(req.session.usuarioLogueado)
        return res.redirect('/')
        
    }
    next();
    }
