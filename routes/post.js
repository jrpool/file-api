const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

// Identify the ID from the content of the ID file.
const getID = data => JSON.parse(data).nextID;

// Write the specified content to the specified file.
const writeQuote = content => {
  fs.readFile(
    __dirname + 'util/nextid.json',
    'utf8',
    (err, data) => {
      if (err) {
        router.
      }
    }
  )
}

// Read the ID file.
const readIDFile = () => {
  fs.readFile(__dirname + 'util/nextid.json', 'utf8', getID)

// Create a file containing the specified quote.
router.post(
  '/api/quotes',
  (req, res, next) => {
    res.send('respond with a resource');
  }
);

module.exports = router;
