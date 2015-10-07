jest.dontMock('../x_max_u.js');
var x_max_u = require('../x_max_u');
describe('calc x_max_u', function() {
 it('x_max_u(1,5) = 5', function() {
   expect(x_max_u(1,5)).toBe(5);
 });
});