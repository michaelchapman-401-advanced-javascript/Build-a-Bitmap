'use strict';

const validateBMP = require('./validate-bmp.js');

module.exports = (bmp) => {
  if (!validateBMP(bmp)) console.error('Invalid file type!');
  else {
    console.log('Transforming bitmap into greyscale', bmp);

    for (let i = 0; i < bmp.colorArray.length; i+=4) {
      bmp.colorArray[i] = 255 - bmp.colorArray[i];
      bmp.colorArray[i+1] = 255 - bmp.colorArray[i+1];
      bmp.colorArray[i+2] = 255 - bmp.colorArray[i+2];
    }
  }
};