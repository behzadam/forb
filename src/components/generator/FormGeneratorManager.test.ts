import { ConditionsType } from '../../types';
import { ifMeetsCondition, isContains, isEmpty } from './FormGeneratorManager';

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

describe(`${ConditionsType.IsEmpty}`, () => {
  test('should return true on empty values', () => {
    expect(ifMeetsCondition(ConditionsType.EqualTo, []));
    expect(ifMeetsCondition(ConditionsType.EqualTo, null));
    expect(ifMeetsCondition(ConditionsType.EqualTo, ''));
  });
});

describe(`${ConditionsType.Contains}`, () => {
  test(`should return true array contains some of another array`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = ['ch1', 'ch2'];

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked array is empty`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = [] as string[];

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if traget array is empty`, () => {
    const target = [] as string[];
    const picked = ['ch1', 'ch2'];

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(false);
  });

  test(`should return true if target string contains picked string`, () => {
    const target = 'hello world';
    const picked = 'hello';

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked is empty`, () => {
    const target = 'hello world';
    const picked = null;

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(false);
  });
});

describe(`${ConditionsType.EqualTo}`, () => {
  test(`should return true if strings are eual`, () => {
    const target = 'hello';
    const picked = 'hello';
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(true);
  });

  test(`should return false if picked is an empty string`, () => {
    const target = 'hello';
    const picked = '';
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if picked is null`, () => {
    const target = 'hello';
    const picked = null;
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(false);
  });

  test(`should return false if strings are not equal`, () => {
    const target = 'a';
    const picked = 'b';
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(false);
  });

  test(`should return true if non English strings are equal`, () => {
    const target = 'سلام';
    const picked = 'سلام';
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(true);
  });

  test(`should return true if non English strings are not equal`, () => {
    const target = 'سلام دنیا';
    const picked = 'سلام';
    const result = ifMeetsCondition(ConditionsType.EqualTo, target, picked);
    expect(result).toBe(false);
  });
});
