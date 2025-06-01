const express = require('express');
const router = express.Router();
const controller = require('./user.controller')


router.post('/validateUser', controller.validateUser)
router.post('/create', controller.create)
router.get('/users', controller.getUsersByRole);
router.put('/deleteUser', controller.deleteUser);
router.put('/updateUser', controller.updateUser);



module.exports = router;