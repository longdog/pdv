jest.dontMock('../phi.js');
var phi = require('../phi');
describe('calcPhi', function() {
 it('phi(0, 0, 0, 0, 0) = 0', function() {
   expect(phi(0, 0, 0, 0, 0)).toBe(0);
 });
 it('phi(1, 1, 1, 1, 1) = 1', function() {
   expect(phi(1, 1, 1, 1, 1)).toBe(1);
 });
  it("phi('a', 'b', 'c', 'd', null)", function() {
   expect(phi('a', 'b', 'c', 'd', null)).toBe(0);
 });
});