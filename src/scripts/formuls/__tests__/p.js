jest.dontMock('../p.js');
var p = require('../p');
describe('calc p', function() {
 it('p(1,5) = 3', function() {
   expect(p(1,5)).toBe(3);
 });
 it('p(1,1) = 1', function() {
   expect(p(1,1)).toBe(1);
 });
 it('p(2,1) = 1.32', function() {
   expect(p(2,1)).toBe(1.32);
 });
});