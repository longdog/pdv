jest.dontMock('../c.js');
var c = require('../c');
describe('calcC(S1, Cmax)', function() {
 it('c(1, 2) = 2', function() {
   expect(c(1,2)).toBe(2);
 });
});