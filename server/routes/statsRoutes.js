const express = require('express');
const router = express.Router();
const { trackResumeDownload, getStats } = require('../controllers/statsController');

router.post('/resume-download', trackResumeDownload);
router.get('/', getStats);

module.exports = router;