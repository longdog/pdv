jest.dontMock('../s1.js');
var s1 = require('../s1');
describe('calcS1(x, Xmax, F, H)', function() {
 it('s1(1,1,1,10) = 1', function() {
   expect(s1(1,1,1,10)).toBe(1);
 });
 it('s1(1,1,1,1) = 1', function() {
   expect(s1(1,1,1,1)).toBe(1);
 });

 it('s1(2,1,1,1) = 0.74', function() {
   expect(s1(2,1,1,1).toFixed(2)).toBe("0.74");
 });

 it('s1(10,1,1,1) = 0.08', function() {
   expect(s1(10,1,1,1).toFixed(2)).toBe("0.08");
 });

 it('s1(10,1,2,1) = 0.06', function() {
   expect(s1(10,1,2,1).toFixed(2)).toBe("0.06");
 });

});