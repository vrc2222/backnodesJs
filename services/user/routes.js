const express = require('express');
const router = express.Router();
const controller = require('./user.controller')


router.post('/validateUser', controller.validateUser)

module.exports = router;