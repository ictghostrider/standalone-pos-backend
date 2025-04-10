
const express = require('express');
const router = express.Router();
const { saveOffline, listOffline } = require('../controllers/offlineController');

router.post('/save', saveOffline);
router.get('/all', listOffline);

module.exports = router;
