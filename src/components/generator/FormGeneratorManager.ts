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

function isContains(target: string[], other: string[]): boolean;
function isContains(target: string, other: string): boolean;
function isContains(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    return target.includes(other);
  }
  if (Array.isArray(target) && Array.isArray(other)) {
    return target.some((item: string) => other.includes(item));
  }
  return false;
}

function isEquals(target: string, other: string): boolean;
function isEquals(target: number, other: number): boolean;
function isEquals(target: boolean, other: boolean): boolean;
function isEquals(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    const areEqual: number = target?.localeCompare(other) ?? -1;
    return areEqual === 0;
  }
  return target === other;
}

export const isGreaterThan = (target: number, other: number): boolean => {
  return target > other;
};

export const isGreaterThanOrEquals = (
  target: number,
  other: number
): boolean => {
  return target >= other;
};

export const isLessThan = (target: number, other: number): boolean => {
  return target < other;
};

export const isLessThanOrEquals = (target: number, other: number): boolean => {
  return target <= other;
};

export const ifMeetsCondition = (
  operator: string,
  target: any,
  other: any
): boolean => {
  try {
    const operations: Record<string, Function> = {
      [ConditionsType.IsEmpty]: (): boolean => isEmpty(target),
      [ConditionsType.IsNotEmpty]: (): boolean => !isEmpty(target),
      [ConditionsType.Contains]: (): boolean => isContains(target, other),
      [ConditionsType.IsNotContaining]: (): boolean =>
        !isContains(target, other),
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
  } catch (error) {
    return false;
  }
};
