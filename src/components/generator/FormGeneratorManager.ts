import { ConditionsType } from '../../types';

export function isEmpty(val: any) {
  return val == null || !(Object.keys(val) || val).length;
}

export function isContains(target: string[], other: string[]): boolean;
export function isContains(target: string, other: string): boolean;
export function isContains(target: string, other: string | null): boolean;
export function isContains(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    return target.includes(other);
  }
  if (Array.isArray(target) && Array.isArray(other)) {
    return target.some((item: string) => other.includes(item));
  }
  return false;
}

export function isEquals(target: string, other: string): boolean;
export function isEquals(target: number, other: number): boolean;
export function isEquals(target: boolean, other: boolean): boolean;
export function isEquals(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    const areEqual: number = target?.localeCompare(other) ?? -1;
    return areEqual === 0;
  }
  return target === other;
}

export function isGreaterThan(target: number, other: number): boolean {
  return target > other;
}

export function isGreaterThanOrEquals(target: number, other: number): boolean {
  return target >= other;
}

export function isLessThan(target: number, other: number): boolean {
  return target < other;
}

export function isLessThanOrEquals(target: number, other: number): boolean {
  return target <= other;
}

export function ifMeetsCondition(operator: string, target: any): boolean;
export function ifMeetsCondition(
  operator: string,
  target: any,
  other: any
): boolean;
export function ifMeetsCondition(
  operator: string,
  target: any,
  other?: any
): boolean {
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
}
