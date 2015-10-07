jest.dontMock('../r.js');
var r = require('../r');
describe('calc r', function() {
 it('r(1,2) = 0.5', function() {
   expect(r(1,2)).toBe(0.5);
 });
 it('r(2,1) = 0.75', function() {
   expect(r(2,1)).toBe(0.75);
 });
});