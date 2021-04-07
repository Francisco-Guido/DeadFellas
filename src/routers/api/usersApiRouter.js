const express = require('express');
const router = express.Router();
const usersApiController= require('../../controllers/api/apiUsersController.js')

router.get('/api/user', usersApiController.allUsers)
router.get('/api/user/:id', usersApiController.find)

module.exports = router;