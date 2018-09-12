const {mdLinks} = require('./../index');
describe('mdLinks, recorre un documento y devuelve las url', () =>{
  test('mdLinks, debe ser una funcion', () => {
    expect(typeof mdLinks).toEqual('function');
  });
});
