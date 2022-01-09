import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  test('should return true on empty values', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  test('should return false on non empty values', () => {
    // type should be considered a collection
    expect(isEmpty(['one'])).toBe(false);
    expect(isEmpty('string')).toBe(false);
    expect(isEmpty({ prop: 'one' })).toBe(false);
  });
});
