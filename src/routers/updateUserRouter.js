const express = require('express');
const router = express.Router();
const updateUserController = require('../controllers/updateUserController');


router.get('/modificarUsuario/:id', updateUserController.update);

router.put('/modificarUsuario/:id',updateUserController.modificar)





module.exports = router;