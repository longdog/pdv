jest.dontMock('../cy.js');
var cy = require('../cy');
describe('calcCy(S2, C)', function() {
 it('cy(1,2) = 2', function() {
   expect(cy(1,2)).toBe(2);
 });
});