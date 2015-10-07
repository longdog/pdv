jest.dontMock('../n.js');
var n = require('../n');
describe('calc n', function() {
 it('n(0.5) = 2.198', function() {
   expect(n(0.5)).toBe(2.198);
 });
 it('n(2) = 1', function() {
   expect(n(2)).toBe(1);
 });
 it('n(0.4) = 1.76', function() {
   expect(n(0.4).toFixed(2)).toBe('1.76');
 });
});