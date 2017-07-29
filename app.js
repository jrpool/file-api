// Create a server application.
const app = require('express')();

// Import and configure required modules.
const textParser
  = require('body-parser').text({inflate: false, limit: 1000, type: '*/*'});
const fs = require('fs');

// Formulate a success report.
const reportSuccess = (verb, nextID) =>
  `{"message": "Successfully ${verb} the file ${nextID}.json"}\n`;

// Formulate an error report.
const reportError = (clause, error) =>
  `Could not ${clause}.\nError: ${error.message}`;

///// ROUTES /////

// Add a quote.
app.post(
  '/api/quotes',
  textParser,
  (req, res) => {
    // Get the next ID.
    fs.readFile(
      __dirname + '/util/nextid.json',
      'utf8',
      (err, data) => {
        if (err) {
          res.send(reportError('look up the next quote’s ID', err));
        }
        else {
          const nextID = JSON.parse(data).nextID;
          // Write the request body to a file named with the next ID.
          fs.writeFile(
            __dirname + '/public/quotes/' + nextID + '.json',
            req.body.toString(),
            'utf8',
            err => {
              if (err) {
                res.send(reportError('record the quote', err));
              }
              else {
                res.send(reportSuccess('created', nextID));
                // Increment the next ID.
                fs.writeFile(
                  __dirname + '/util/nextid.json',
                  `{"nextID": "${Number.parseInt(nextID) + 1}"}`,
                  'utf8',
                  err => {
                    if (err) {
                      res.send(reportError('increment the next ID', err));
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }
);

// Make the application listen for queries.
app.listen(3000, () => {
  console.log('App queriable at http://localhost:3000');
});
