import { ConditionsType } from '../../types';

export const isEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

export const isContains = (target: string, other: string): boolean => {
  return target?.includes(other);
};

// todo: should replace with lodash or another lib
export const isEquals = (target: string, other: string): boolean => {
  return target === other;
};

// todo: should handle other formats
export const isGreaterThan = (target: string, other: string): boolean => {
  return target > other;
};

// todo: should handle other formats
export const isGreaterThanOrEquals = (
  target: string,
  other: string
): boolean => {
  return target >= other;
};

// todo: should handle other formats
export const isLessThan = (target: string, other: string): boolean => {
  return target < other;
};

// todo: should handle other formats
export const isLessThanOrEquals = (target: string, other: string): boolean => {
  return target <= other;
};

export const ifMeetsCondition = (
  operator: string,
  target: string,
  other: string
): boolean => {
  const operations: Record<string, Function> = {
    [ConditionsType.IsEmpty]: (): boolean => isEmpty(target),
    [ConditionsType.IsNotEmpty]: (): boolean => !isEmpty(target),
    [ConditionsType.Contains]: (): boolean => isContains(target, other),
    [ConditionsType.IsNotContaining]: (): boolean => !isContains(target, other),
    [ConditionsType.EqualTo]: (): boolean => isEquals(target, other),
    [ConditionsType.NotEqualTo]: (): boolean => !isEquals(target, other),
    [ConditionsType.GreaterThan]: (): boolean => isGreaterThan(target, other),
    [ConditionsType.GreaterThanOrEquals]: (): boolean =>
      isGreaterThanOrEquals(target, other),
    [ConditionsType.LessThan]: (): boolean => isLessThan(target, other),
    [ConditionsType.LessThanOrEquals]: (): boolean =>
      isLessThanOrEquals(target, other),
  };
  return operations[operator]?.(target, other) ?? false;
};
