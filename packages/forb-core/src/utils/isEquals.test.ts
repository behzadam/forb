import { isEquals } from './isEquals';

describe(`isEquals`, () => {
  test(`should return true if strings are eual`, () => {
    const target = 'hello';
    const picked = 'hello';
    const result = isEquals(target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked is an empty string`, () => {
    const target = 'hello';
    const picked = '';
    const result = isEquals(target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if picked is null`, () => {
    const target = 'hello';
    const picked = null;
    const result = isEquals(target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if strings are not equal`, () => {
    const target = 'a';
    const picked = 'b';
    const result = isEquals(target, picked);
    expect(result).toBe(false);
  });

  test(`should return true if non English strings are equal`, () => {
    const target = 'سلام';
    const picked = 'سلام';
    const result = isEquals(target, picked);
    expect(result).toBe(true);
  });

  test(`should return true if non English strings are not equal`, () => {
    const target = 'سلام دنیا';
    const picked = 'سلام';
    const result = isEquals(target, picked);
    expect(result).toBe(false);
  });
});
