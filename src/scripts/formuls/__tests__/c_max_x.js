jest.dontMock('../c_max_x.js');
var c_max_x = require('../c_max_x');
describe('calc c_max_x', function() {
 it('c_max_x(1,2) = 2', function() {
   expect(c_max_x(1,2)).toBe(2);
 });
});