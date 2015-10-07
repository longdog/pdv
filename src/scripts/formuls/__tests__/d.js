jest.dontMock('../d.js');
jest.dontMock('../../utils/cbrt.js');
var d = require('../d');
describe('calc d', function() {
 it('d(0, 100, 1, 1, 0.5) = 5.7', function() {
   expect(d(0, 100, 1, 1, 0.5)).toBe(5.7);
 });
 it('d(0, 100, 1, 1, 2) = 22.8', function() {
   expect(d(0, 100, 1, 1, 2)).toBe(22.8);
 });
 it('d(0, 100, 1, 1, 9) = 48', function() {
   expect(d(0, 100, 1, 1, 9)).toBe(48);
 });
 it('d(1, 99, 1, 1, 0.5) = 5.7', function() {
   expect(d(1, 150, 1, 1, 0.5)).toBe(5.7);
 });
 it('d(0, 99, 1, 1, 0.5) = 3.1744', function() {
   expect(d(0, 99, 1, 1, 0.5)).toBe(3.1744);
 });
 it('d(0, 99, 1, 1, 2) = 3.1744', function() {
   expect(d(0, 99, 1, 1, 0.5)).toBe(3.1744);
 });
});