const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');


router.get('/', updateController.update);
router.delete('delete:id', updateController.delete);





module.exports = router;