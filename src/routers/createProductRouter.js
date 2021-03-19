const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController');
const multer = require('multer');
const upload2= require('../middlewares/productMid')
const productValidation = require('../validations/productsValidation');

router.get('/', createProductController.createProduct);
router.post('/', upload2.any(), productValidation, createProductController.enviandoProduct)



module.exports = router;