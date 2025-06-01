const express = require('express');
const router = express.Router();
const DashBoardController= require('./dashboard.controller')

router.get('/signals', DashBoardController.getAllSignals);
router.post('/user_signal', DashBoardController.assignSignal);  // 👈 ESTA ES LA QUE FALTA
router.post('/get_user_signal', DashBoardController.getUserSignal);

module.exports = router;