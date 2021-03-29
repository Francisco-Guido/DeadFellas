const express = require('express');
const router = express.Router();
const productsCartController = require('../controllers/productsCartController');
const middlewareCarrito = require ('../middlewares/carrito')

router.get('/',  productsCartController.cart);



module.exports = router;