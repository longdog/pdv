jest.dontMock('../u_max.js');
var u_max = require('../u_max');
//deltaT, f, v_max, v1_max
describe('calc u_max', function() {
 it('u_max(1, 1, 1, 0.5) = 0.5', function() {
   expect(u_max(1, 1, 1, 0.5)).toBe(0.5); // 65
 });
 it('u_max(1, 1, 1, 0.6) = 0.6', function() {
   expect(u_max(1, 1, 1, 0.6)).toBe(0.6); // 67
 });
 it('u_max(1, 1, 1, 2.1) = 4.62', function() {
   expect(u_max(1, 1, 1, 2.1).toFixed(2)).toBe("4.62"); // 68
 });

 it('u_max(0, 100, 1, 0.5) = 0.5', function() {
   expect(u_max(0, 100, 1, 0.5)).toBe(0.5); // 65
 });
 it('u_max(0, 100, 1, 0.6) = 0.6', function() {
   expect(u_max(0, 100, 1, 0.6)).toBe(0.6); // 67
 });
 it('u_max(0, 100, 1, 2.1) = 4.62', function() {
   expect(u_max(0, 100, 1, 2.1).toFixed(2)).toBe("4.62"); // 68
 });

 it('u_max(0.1, 99, 0.5, 1) = 0.5', function() {
   expect(u_max(0.1, 99, 0.5, 1)).toBe(0.5); // 70
 });

 it('u_max(0.1, 99, 0.6, 1) = 0.6', function() {
   expect(u_max(0.1, 99, 0.6, 1)).toBe(0.6); // 72
 });

 it('u_max(0.1, 99, 2.1, 1) = 3.36', function() {
   expect(u_max(0.1, 25, 2.1, 1).toFixed(2)).toBe("3.36"); // 73
 });

});