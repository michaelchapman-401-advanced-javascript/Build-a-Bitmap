'use strict';

const fs = require('fs');

// Note that this has to be nested!
// Also, it uses the bitmap's instance properties for the name and thew new buffer
module.exports = function writeFile(bitmap) {
  console.log('gfhfhgffhgf');
  console.log(bitmap);

  return new Promise((resolve, reject) => {
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        reject(err);
      }
      resolve(`Bitmap Transformed: ${bitmap.newFile}`);
    });
  });
};
