const db = require ('../database/models/');

module.exports = {

    update: function(req,res){
    db.Product.findAll()
     .then (function(vistaAdmin){
         res.render('updateProduct', {vistaAdmin:vistaAdmin}) 
     })
},

delete: function (req, res) {
    db.Product.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
        res.redirect('/updateProduct')
    })
    .catch(function(e){
        res.send(e)
    })
}
}
