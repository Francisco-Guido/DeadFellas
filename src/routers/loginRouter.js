const express = require('express');
const router = express.Router();
const bcrypt=require("bcryptjs");
const path=require("path");
const loginController = require('../controllers/loginController');
const middlewareLogueado = require('../middlewares/logueado');
const loginValidation = require('../validations/loginValidation');


router.get('/login',middlewareLogueado, loginController.log);

router.post('/login', middlewareLogueado, loginController.checkUser);

router.get('/logout', loginController.logout);


module.exports = router;