/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      fileData = fileData.toString();
      let firstLine = fileData.substring(0, fileData.indexOf('\n'));
      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, res, body) => {
    if (err) {
      callback(err, res);
    } else {
      callback(null, res.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
