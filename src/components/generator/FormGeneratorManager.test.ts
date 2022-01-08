import { ConditionsType } from '../../types';
import { ifMeetsCondition } from './FormGeneratorManager';

describe(`${ConditionsType.Contains}`, () => {
  test(`should return true if target contains any item`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = ['ch1', 'ch2'];

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(true);
  });

  test(`should return false on compare with an empty array`, () => {
    const target = ['ch1', 'ch2', 'ch3', 'ch4'];
    const picked = [] as string[];

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(false);
  });

  test(`should return true if target contains any item`, () => {
    const target = 'hello world';
    const picked = 'hello';

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(true);
  });

  test(`should return true if target contains any item`, () => {
    const target = 'hello world';
    const picked = null;

    const result = ifMeetsCondition(ConditionsType.Contains, target, picked);
    expect(result).toBe(false);
  });
});
