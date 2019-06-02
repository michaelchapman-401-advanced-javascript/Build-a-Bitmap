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
    colorArray: [7, 150, 23, 1],
    pixelData: [],
  };

  it('Properly greyscales a bitmap', () => {
    greyscale(obj);

    expect(obj.colorArray[0]).toEqual(60);
    expect(obj.colorArray[1]).toEqual(60);
    expect(obj.colorArray[2]).toEqual(60);
    expect(obj.colorArray[3]).toEqual(1);
  });
});