'use strict';

const validateBMP = require('./validate-bmp.js');

module.exports = (bmp) => {
  if (!validateBMP(bmp)) console.error('Invalid file type!');
  else {
    console.log('Pixelating bitmap', bmp);

    for (let i = 0; i < bmp.pixelData.length; i+=2) {
      let rando = Math.floor((Math.random()*5)+1);
      bmp.pixelData[i+rando] = null;
    }
  }
};