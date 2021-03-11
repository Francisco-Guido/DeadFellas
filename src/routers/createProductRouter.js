const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController');
const multer = require('multer');
const upload2= require('../middlewares/productMid')

router.get('/', createProductController.createProduct);
router.post('/', upload2.any(), createProductController.enviandoProduct)



module.exports = router;