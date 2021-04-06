const express = require('express');
const router = express.Router();
const collectionApiController= require('../../controllers/api/apiCollectionsController')

router.get('/api/collection', collectionApiController.allCollections)

module.exports = router;