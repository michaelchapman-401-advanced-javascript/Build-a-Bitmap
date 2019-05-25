'use strict';

const validateBMP = require('./validate-bmp.js');

module.exports = (bmp) => {
  if (!validateBMP(bmp)) console.error('Invalid file type!');
  else {
    console.log('Transforming bitmap into greyscale', bmp);

    for (let i = 0; i < bmp.colorArray.length; i+=4) {
      if (bmp.colorArray[i] > 130) {
        bmp.colorArray[i] -= 150;
        bmp.colorArray[i+1] -= 150;
        bmp.colorArray[i+2] -= 150;
      } else {
        bmp.colorArray[i] += 150;
        bmp.colorArray[i+1] += 150;
        bmp.colorArray[i+2] += 150;
      }
    }
  }
};