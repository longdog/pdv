jest.dontMock('../f1.js');
var f1 = require('../f1');
describe('calcF1(x, Xmax)', function() {
 it('f1(1,2) = 1', function() {
   expect(f1(1,2)).toBe(1);
 });
 it('f1(2,1) = 0.125', function() {
   expect(f1(2,1)).toBe(0.125);
 });
 it('f1(80,2) = 0.25', function() {
   expect(f1(80,2)).toBe(0.25);
 });
 it('f1(80,1) = 1', function() {
   expect(f1(80,1)).toBe(1);
 });
});