import { ConditionsType } from '../../types';
import { ifMeetsCondition } from './useFormGeneratorManager';

describe(`Operator`, () => {
  test(`should ${ConditionsType.EqualTo} return true`, () => {
    let result = ifMeetsCondition(ConditionsType.EqualTo, '1', '1');
    expect(result).toBe(true);
    result = ifMeetsCondition(ConditionsType.EqualTo, 'Behzad', 'Behzad');
    expect(result).toBe(true);
    result = ifMeetsCondition(ConditionsType.EqualTo, 1, 1);
    expect(result).toBe(true);
  });
});
