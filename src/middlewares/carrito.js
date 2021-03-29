module.exports = function(req, res, next) {
    if(req.session.usuarioLogueado == true){
        next();
    }
    res.send("HOLA COMO ESTAS");
     
    }

