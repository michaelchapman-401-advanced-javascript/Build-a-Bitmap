'use strict';

jest.mock('fs');

const writefile = require('../lib/writefile.js');
describe('writefile Module', () => {

  it('Should take an object', () => {
    let file = {
      newFile: './assets/baldy.bmp',
    };

    return writefile(file)
      .then(bitmap => {
        expect(bitmap).toEqual(`Bitmap Transformed: ${file.newFile}`);
      });
  });

  it('If given a bad file should return error', () => {
    let files = ['bad.txt'];

    return writefile(files)
      .then()
      .catch(err => expect(err).toBeDefined());
  });
});
