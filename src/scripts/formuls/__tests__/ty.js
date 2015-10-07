jest.dontMock('../ty.js');
var ty = require('../ty');
describe('calcTy(U, y, x)', function() {
 it('ty(5,1,1) = 5', function() {
   expect(ty(5,1,1)).toBe(5);
 });

 it('ty(6,1,1) = 5', function() {
   expect(ty(6,1,1)).toBe(5);
 });

});