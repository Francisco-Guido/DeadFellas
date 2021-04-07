const express = require('express');
const router = express.Router();
const productsCartController = require('../controllers/productsCartController');
const multer = require('multer');
const middlewareCarrito = require ('../middlewares/carrito');
const upload5= require('../middlewares/productMid')

router.get('/productsCart', upload5.any(),  productsCartController.cart);



module.exports = router;