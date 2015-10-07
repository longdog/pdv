jest.dontMock('../s2.js');
var s2 = require('../s2');
describe('calcS2(ty)', function() {
 it('s2(1) = 0.00015', function() {
   expect(s2(1).toFixed(5)).toBe("0.00015");
 });
});