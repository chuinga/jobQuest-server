const express = require('express');
const router = express.Router();

// Lazy Login route
router.post('/login', (req, res) => {
  res.send('Login feature under development.');
});

// Automated Resume Builder route
router.get('/resume/:id', (req, res) => {
  res.send(`Generated resume for user ${req.params.id}`);
});

module.exports = router;
