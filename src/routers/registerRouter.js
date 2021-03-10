const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt=require("bcryptjs");
const path=require("path")

const registerController = require('../controllers/registerController');

const middlewareLogueado = require('../middlewares/logueado');

const registerValidation = require('../validations/registerValidation');

router.get ('/register', registerController.register)

router.post ('/register', registerValidation, registerController.create)

router.post ('/login',registerController.login) 

module.exports = router;