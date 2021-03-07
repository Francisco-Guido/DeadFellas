const express = require('express');
const router = express.Router();
const updateUserController = require('../controllers/updateUserController');


router.get('/updateUsuario/:id', updateUserController.update);

router.put('/updateUsuario/:id',updateUserController.modificar)





module.exports = router;