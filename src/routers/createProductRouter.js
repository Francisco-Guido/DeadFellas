const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController');


router.get('/', createProductController.createProduct);
router.post('/', createProductController.enviandoProduct)
router.get('/vistaProductos', createProductController.pushProducts)


module.exports = router;