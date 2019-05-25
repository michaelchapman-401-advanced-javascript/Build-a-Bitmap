'use strict';

const greyscale = require('../lib/greyscale.js');

describe('Greyscale Module', () => {

  const obj = {
    file: './assets/baldy.bmp',
    buffer: [],
    type: 'BM',
    fileSize: 15146,
    pixelOffset: 1146,
    width: 110,
    heigt: 125,
    bytesPerPixel: 8,
    colorArray: [],
    pixelData: []
  };

  it('Should take an object', () => {
    expect(greyscale(obj)).toBeDefined();
  });
});