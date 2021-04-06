const express = require('express');
const router = express.Router();
const usersApiController= require('../../controllers/api/apiUsersController.js')

router.get('/api/user', usersApiController.allUsers)

module.exports = router;