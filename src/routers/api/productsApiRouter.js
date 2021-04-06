const express = require('express');
const router = express.Router();
const productsApiController= require('../../controllers/api/apiProductsController.js')

router.get('/api/product', productsApiController.allProducts)

module.exports = router;