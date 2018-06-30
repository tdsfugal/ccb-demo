/* eslint-disable no-undef, import/first, no-unused-vars */
jest.unmock('./index');
jest.mock('../field', () => ({
  decryptField: jest.fn(f => f.slice(12)),
  encryptField: jest.fn(f => `ENCRYPTED - ${f}`),
}));

import encryptVars from './index';

describe('The encryptVars function ', () => {
  it('should return an unchanged vars object with an empty secured array', () => {
    const vars = {
      badda: 'badda',
      bing: 'bing',
      boom: 'boom',
    };
    const secured = [];
    expect(encryptVars(vars, secured)).toEqual(vars);
  });

  it('should return a modified data object with an valid secured array', () => {
    const vars = {
      badda: 'badda',
      bing: 'bing',
      boom: 'boom',
    };
    const secured = [
      {
        name: 'bing',
      },
    ];
    const expected = {
      badda: 'badda',
      bing: 'ENCRYPTED - bing',
      boom: 'boom',
    };
    expect(encryptVars(vars, secured)).toEqual(expected);
  });

  it('should ignore unused secured values', () => {
    const vars = {
      badda: 'badda',
      bing: 'bing',
      boom: 'boom',
    };
    const secured = [
      {
        name: 'extra',
      },
      {
        name: 'bing',
      },
      {
        name: 'alsoextra',
      },
    ];
    const expected = {
      badda: 'badda',
      bing: 'ENCRYPTED - bing',
      boom: 'boom',
    };
    expect(encryptVars(vars, secured)).toEqual(expected);
  });

  it('should work with empty var objects', () => {
    const vars = {};
    const secured = ['bing'];
    const expected = {};
    expect(encryptVars(vars, secured)).toEqual(expected);
  });
});
