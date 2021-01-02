const express = require('express');
const router = express.Router();
const productsCartController = require('../controllers/productsCartController');

router.get('/', productsCartController.cart);


module.exports = router;