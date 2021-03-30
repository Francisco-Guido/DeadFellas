const express = require('express');
const router = express.Router();
const updateUserController = require('../controllers/updateUserController');


router.get('/modificarUsuario', updateUserController.update);

router.put('/modificarUsuario',updateUserController.modificar)





module.exports = router;