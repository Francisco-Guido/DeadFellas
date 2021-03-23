const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const upload4= require('../middlewares/productMid')

router.get('/products', upload4.any(), productsController.pushProducts);

router.get('/Detalle/:id', upload4.any(), productsController.detalle);

module.exports = router;
