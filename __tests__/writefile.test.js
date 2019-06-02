'use strict';

jest.mock('fs');

const writefile = require('../lib/writefile.js');

describe('writefile Module', () => {
  it('Should take an object', () => {
    let file = 'File Contents';
    let obj = {
      file: './assets/baldy.bmp',
      buffer: Buffer.from(file),
      type: 'BM',
      fileSize: 15146,
      pixelOffset: 1146,
      width: 110,
      heigt: 125,
      bytesPerPixel: 8,
      colorArray: Buffer.from(file),
      pixelData: Buffer.from(file),
      newFile: './assets/baldy.greyscale.bmp',
    };

    return writefile(obj)
      .then(bitmap => {
        expect(bitmap).toEqual(`Bitmap Transformed: ${bitmap.newFile}`);
      });
  });

  it('If given a bad file should return error', () => {
    let files = ['bad.txt'];

    return writefile(files)
      .then()
      .catch(err => expect(err).toBeDefined());
  });
});