const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController');
const multer = require('multer');
const upload2 = require('../middlewares/productMid')
const productValidation = require('../validations/productsValidation');
const bcrypt=require("bcryptjs");
const path=require("path");
const middleware = require('../middlewares/esUsuario');


router.get('/',middleware , createProductController.createProduct);

router.post('/', upload2.any(), productValidation, createProductController.enviandoProduct)



module.exports = router;