const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const upload4= require('../middlewares/productMid')

router.get('/products', productsController.pushProducts);

router.get('/Detalle/:id', productsController.detalle);

module.exports = router;
