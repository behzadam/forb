import { ConditionsType } from '../types';

export const isEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

export const isContains = (target: string, dest: string): boolean => {
  console.log('isContains', target, dest);
  return target?.includes(dest);
};

// todo: should replace with lodash or another lib
export const isEquals = (target: string, dest: string): boolean => {
  return target === dest;
};

// todo: should handle other formats
export const isGreaterThan = (target: string, dest: string): boolean => {
  return target > dest;
};

// todo: should handle other formats
export const isGreaterThanOrEquals = (
  target: string,
  dest: string
): boolean => {
  return target >= dest;
};

// todo: should handle other formats
export const isLessThan = (target: string, dest: string): boolean => {
  return target < dest;
};

// todo: should handle other formats
export const isLessThanOrEquals = (target: string, dest: string): boolean => {
  return target <= dest;
};

export const checkCondition = (
  state: string,
  target: string,
  dest: string
): boolean => {
  const operations: Record<string, Function> = {
    [ConditionsType.IsEmpty]: (): boolean => isEmpty(target),
    [ConditionsType.IsNotEmpty]: (): boolean => !isEmpty(target),
    [ConditionsType.Contains]: (): boolean => isContains(target, dest),
    [ConditionsType.IsNotContaining]: (): boolean => !isContains(target, dest),
    [ConditionsType.EqualTo]: (): boolean => isEquals(target, dest),
    [ConditionsType.NotEqualTo]: (): boolean => !isEquals(target, dest),
    [ConditionsType.GreaterThan]: (): boolean => isGreaterThan(target, dest),
    [ConditionsType.GreaterThanOrEquals]: (): boolean =>
      isGreaterThanOrEquals(target, dest),
    [ConditionsType.LessThan]: (): boolean => isLessThan(target, dest),
    [ConditionsType.LessThanOrEquals]: (): boolean =>
      isLessThanOrEquals(target, dest),
  };
  return operations[state]?.(target, dest) ?? false;
};
