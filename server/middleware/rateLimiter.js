const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    message: 'Too many contact requests from this IP, please try again after 15 minutes.',
  },
  standardHeaders: true, // return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // disable the X-RateLimit-* headers
});

module.exports = contactLimiter;