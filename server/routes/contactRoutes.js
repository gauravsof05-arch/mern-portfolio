const express = require('express');
const router = express.Router();
const contactLimiter = require('../middleware/rateLimiter');
const {
  createContact,
  getContacts,
  markAsRead,
} = require('../controllers/contactController');

router.post('/', contactLimiter, createContact); // rate limiter applied ONLY here
router.get('/', getContacts);
router.put('/:id/read', markAsRead);

module.exports = router;