const express = require('express');
const router = express.Router();
const generalController = require('../controllers/generalController');
const multer = require('multer');
const upload5= require('../middlewares/productMid')


router.get('/', generalController.index);


module.exports = router;













