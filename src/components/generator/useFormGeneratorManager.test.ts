import { ConditionsType } from '../../types';
import { isEmpty, ifMeetsCondition } from './useFormGeneratorManager';

describe('operator', () => {
  test('should call checkCondition', () => {
    const result = ifMeetsCondition(ConditionsType.EqualTo, '1', '1');
    expect(result).toBe(true);
  });

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
