const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to The Lazy Programmer\'s Job Quest API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});