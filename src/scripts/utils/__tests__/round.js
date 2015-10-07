jest.dontMock('../round.js');
var round = require('../round');
describe('test round', function() {
 it('round(0.12345678, 2) = 0.12', function() {
   expect(round(0.12345678, 2)).toBe(0.12);
 });
});