const express = require('express');
const router = express.Router();
const collectionsApiController= require('../../controllers/api/apiCollectionsController.js')

router.get('/api/collections', collectionsApiController.allCollections)

module.exports = router;