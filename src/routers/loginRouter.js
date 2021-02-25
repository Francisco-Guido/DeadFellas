const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const bcrypt=require("bcryptjs");
const middlewareLogueado = require('../middlewares/logueado');


router.get('/',middlewareLogueado, loginController.log);
router.post('/',middlewareLogueado, loginController.checkUser)


module.exports = router;