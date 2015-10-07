jest.dontMock('../c_max_u.js');
var c_max_u = require('../c_max_u');
describe('calc c_max_u', function() {
 it('c_max_u(1,2) = 2', function() {
   expect(c_max_u(1,2)).toBe(2);
 });
});