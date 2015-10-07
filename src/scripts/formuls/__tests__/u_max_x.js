jest.dontMock('../u_max_x.js');
var u_max_x = require('../u_max_x');
describe('calc u_max_x', function() {
 it('u_max_x(1,2) = 2', function() {
   expect(u_max_x(1,2)).toBe(2);
 });
});