jest.dontMock('../s11.js');
var s11 = require('../s11');
describe('calcS11(x, Xmax, F)', function() {
 it('s11(1,1,1) = 1', function() {
   expect(s11(1,1,1)).toBe(1);
 });

 it('s11(2,1,1) = 0.79', function() {
   expect(s11(2,1,1).toFixed(2)).toBe("0.79");
 });

 it('s11(10,1,1) = 0.12', function() {
   expect(s11(10,1,1).toFixed(2)).toBe("0.12"); // 103
 });

 it('s11(50,1,1) = 0.008', function() {
   expect(s11(50,1,1).toFixed(3)).toBe("0.008"); // 106
 });

 it('s11(50,1,2) = 0.005', function() {
   expect(s11(50,1,2).toFixed(3)).toBe("0.005"); // 107
 });

 it('s11(100,1,1) = 0.003', function() {
   expect(s11(100,1,1).toFixed(3)).toBe("0.003"); // 109
 });

 it('s11(100,1,2) = 0.0009', function() {
   expect(s11(100,1,2).toFixed(4)).toBe("0.0009"); // 110
 });

});