'use strict';

const fs = require('fs');

module.exports = function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};
