const { add, mul } = require('../src/math');

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3)).toBe(5);
    });
    it('should return －1 when 2 + －3', () => {
      expect(add(2, -3)).toBe(-1);
    });
  });
  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      expect(mul(2, 3)).toBe(6);
    });
    it('should return 8 when 2 * 4', () => {
      expect(mul(2, 4)).toBe(8);
    });
  });
});
