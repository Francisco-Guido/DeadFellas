const express = require('express');
const router = express.Router();
const productsDetailController = require('../controllers/productsDetailController');
const multer = require('multer');
const upload5= require('../middlewares/productMid')

router.get('/productsDetail', upload5.any(), productsDetailController.detail);


module.exports = router;