module.exports = function(req, res, next) {
    if(req.session.usuarioLogueado == true){
        next();
    }
    res.send(req.session.usuarioLogueado);
     
    }

