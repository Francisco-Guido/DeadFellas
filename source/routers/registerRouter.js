const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
//const multer = require('multer')
const bcrypt=require("bcrypt");

router.get('/', registerController.register);
router.post('/', registerController.create);


module.exports = router;