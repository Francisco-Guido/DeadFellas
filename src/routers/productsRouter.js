const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const upload4= require('../middlewares/productMid')

router.get('/', upload4.any(), productsController.pushProducts);

module.exports = router;
