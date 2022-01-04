import { isEmpty } from './utils';

describe('utils', () => {
  test('should return true on empty param', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  test('should return false on non-empty param', () => {
    expect(isEmpty('1')).toBe(false);
    expect(isEmpty([1])).toBe(false);
  });
});
