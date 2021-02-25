const express = require('express');
const router = express.Router();
const productsDetailController = require('../controllers/productsDetailController');

router.get('/', productsDetailController.detail);


module.exports = router;