const express = require('express');
const router = express.Router();
const generalController = require('../controllers/collectionController');


router.get('/coleccion2020', generalController.collection);


module.exports = router;