import { isGreaterThan } from './isGreaterThan';

describe('isGreaterThan', () => {
  test(`should check if target is greater than the number`, () => {
    expect(isGreaterThan(4, 2)).toBe(true);
    expect(isGreaterThan(2, 4)).toBe(false);
  });
});
