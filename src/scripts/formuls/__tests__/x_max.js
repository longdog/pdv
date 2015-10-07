jest.dontMock('../x_max.js');
var x_max = require('../x_max');
describe('calc x_max', function() {
 it('x_max(1,1,1) = 1', function() {
   expect(x_max(1,1,1)).toBe(1);
 });
});