'use strict';

jest.mock('fs');

const pixelate = require('../lib/pixelate.js');

describe('Pixelate Module', () => {

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
    pixelData: [7, 150, 23, 1, 9],
  };

  it('Properly greyscales a bitmap', () => {
    pixelate(obj);

    expect(obj.pixelData).toContain(null);
  });
});