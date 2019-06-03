'use strict';

const inversion = require('../lib/inversion.js');

describe('Inversion Module', () => {

  const obj = {
    file: './assets/baldy.bmp',
    buffer: [],
    type: 'BM',
    fileSize: 15146,
    pixelOffset: 1146,
    width: 110,
    heigt: 125,
    bytesPerPixel: 8,
    colorArray: [255, 255, 255, 1],
    pixelData: [],
  };

  it('Properly inversions a bitmap', () => {
    inversion(obj);

    expect(obj.colorArray[0]).toEqual(0);
    expect(obj.colorArray[1]).toEqual(0);
    expect(obj.colorArray[2]).toEqual(0);
    expect(obj.colorArray[3]).toEqual(1);
  });
});