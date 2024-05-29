const express = require('express');
const router = express.Router();

// Match-Making Algorithm route
router.get('/match', (req, res) => {
  res.send('Job matchmaking feature under development.');
});

// One-Click Apply route
router.post('/apply', (req, res) => {
  res.send('One-click apply feature under development.');
});

module.exports = router;
