const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const bcrypt=require("bcrypt");

router.get('/', loginController.log);
router.post('/', loginController.checkUser)


module.exports = router;