import { isContains } from './isContains';

describe('isContains', () => {
  test(`should return true array contains some of another array`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = ['ch1', 'ch2'];

    const result = isContains(target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked array is empty`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = [] as string[];

    const result = isContains(target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if traget array is empty`, () => {
    const target = [] as string[];
    const picked = ['ch1', 'ch2'];

    const result = isContains(target, picked);
    expect(result).toBe(false);
  });

  test(`should return true if target string contains picked string`, () => {
    const target = 'hello world';
    const picked = 'hello';

    const result = isContains(target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked is empty`, () => {
    const target = 'hello world';
    const picked = null;

    const result = isContains(target, picked);
    expect(result).toBe(false);
  });
});
