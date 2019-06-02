'use strict';

const validateBMP = require('./validate-bmp.js');

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
module.exports = (bmp) => {
  if (!validateBMP(bmp)) console.error('Invalid file type!');
  else {
    console.log('Transforming bitmap into greyscale', bmp);

    for (let i = 0; i < bmp.colorArray.length; i+=4) {
      let gray = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2]) / 3;
      bmp.colorArray[i] = gray;
      bmp.colorArray[i+1] = gray;
      bmp.colorArray[i+2] = gray;
    }
  }
};