
const express = require('express');
const router = express.Router();

router.use('/transactions', require('./routes/transactions'));
router.use('/offline', require('./routes/offline'));
router.use('/reports', require('./routes/reports'));

module.exports = router;
