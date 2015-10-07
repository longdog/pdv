jest.dontMock('../c_max.js');
jest.dontMock('../../utils/cbrt.js');
var c_max = require('../c_max');
describe('calc c_max', function() {
 it('c_max(1, 1, 1, 1, [1,1], 1, 1, 1, 1, 1, 1, 1, 1) = 1', function() {
   expect(c_max(1, 1, 1, 1, [1,1], 1, 1, 1, 1, 1, 1, 1, 1)).toBe(1);
 });
});