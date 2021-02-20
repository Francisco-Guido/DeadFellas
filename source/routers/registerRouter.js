const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const multer = require('multer')
const bcrypt=require("bcryptjs");
const path=require("path")
const middlewareLogueado = require('../middlewares/logueado');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/avatars'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

// Rutas de registo
router.get('/', middlewareLogueado, registerController.register);
router.post('/', middlewareLogueado, upload.single('avatar'), registerController.create);



module.exports = router;