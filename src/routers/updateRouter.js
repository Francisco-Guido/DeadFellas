const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');
const multer = require('multer');
const upload3= require('../middlewares/productMid')

router.get('/updateProduct', upload3.any(), updateController.update);

router.delete('/delete/:id', updateController.delete);

router.get('/update/:id', updateController.detail);

router.put('/update/:id', upload3.any(), updateController.modificar);



module.exports = router;