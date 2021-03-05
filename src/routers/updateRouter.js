const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');


router.get('/updateProduct', updateController.update);

router.delete('/delete/:id', updateController.delete);

router.get('/detail/:id', updateController.detail);

router.put('/detail/:id', updateController.modificar);



module.exports = router;