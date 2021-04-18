const express = require('express');
const router = express.Router();
const productsDetailController = require('../controllers/productsDetailController');
const multer = require('multer');
const upload5= require('../middlewares/productMid')
const middlewareLogueado = require('../middlewares/logueado');

router.get('/productsDetail', upload5.any(), productsDetailController.detail);

router.post('/comprar/:id', upload5.any(), middlewareLogueado, productsDetailController.comprar);

router.get('/deleteCart/:id', productsDetailController.delete);


module.exports = router;