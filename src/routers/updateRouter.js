const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');
const multer = require('multer');
const upload3= require('../middlewares/productMid')
const productValidation = require('../validations/productsValidation');
const bcrypt=require("bcryptjs");
const path=require("path");

router.get('/updateProduct', upload3.any(), updateController.update);

router.delete('/delete/:id', updateController.delete);

router.get('/detail/:id', updateController.detail);

router.put('/detail/:id', productValidation, updateController.modificar);



module.exports = router;