const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt=require("bcryptjs");
const path=require("path");
const registerController = require('../controllers/registerController');
const registerValidation = require('../validations/registerValidation');
const upload5= require('../middlewares/avatarMid')


router.get ('/register', registerController.register)

router.post ('/register', upload5.any(), registerValidation, registerController.create)

router.post ('/login',registerController.login) 

module.exports = router;