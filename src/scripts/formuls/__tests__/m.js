jest.dontMock('../m.js');
jest.dontMock('../../utils/cbrt.js');
var m = require('../m');
describe('calc M', function() {
 it('m(0,0,0) = [1.49, 4.27]', function() {
   expect(m(0,0,0)[0].toFixed(2)).toBe("1.49");
   expect(m(0,0,0)[1].toFixed(2)).toBe("4.27");
 });
 it('m(0,0.6,0)[1] = null', function() {
   expect(m(0,0.6,0)[1]).toBe(null);
 });
 it('m(100,0,0) = [null, 0.90]', function() {
   expect(m(100,0,0)[0]).toBe(null);
   expect(m(100,0,0)[1].toFixed(2)).toBe("0.90");
 });
 it('m(100,0,0.6) = [0.32, null]', function() {
   expect(m(100,0,0.6)[0].toFixed(2)).toBe("0.32");
   expect(m(100,0,0.6)[1]).toBe(null);
 });
});