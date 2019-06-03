'use strict';

jest.mock('fs');

const readfile = require('../lib/readfile.js');

describe('readfile Module', () => {

  it('Should take an object', () => {
    let file = 'File Contents';
    return readfile(file)
      .then(buffer => {
        expect(buffer).toEqual(Buffer.from(file));
      });
  });

  it('If given a bad should return error', () => {
    let files = ['bad.txt'];

    return readfile(files)
      .then()
      .catch(err => expect(err).toBeDefined());
  });
});