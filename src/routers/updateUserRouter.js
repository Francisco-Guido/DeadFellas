const express = require('express');
const router = express.Router();
const updateUserController = require('../controllers/updateUserController');
const middleware = require('../middlewares/esUsuario')


router.get('/modificarUsuario', middleware, updateUserController.update);

router.put('/modificarUsuario',updateUserController.modificar)





module.exports = router;