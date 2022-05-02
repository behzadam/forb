import types { If, ConditionType } from './types'
import {
  isContains,
  isEmpty,
  isEquals,
  isGreaterThan,
  isGreaterThanOrEquals,
  isLessThan,
  isLessThanOrEquals,
} from './utils/index'

export function fieldMeetsTarget(operator: string, target: any): boolean
export function fieldMeetsTarget(
  operator: string,
  target: any,
  other: any
): boolean

export function fieldMeetsTarget(
  operator: string,
  target: any,
  other?: any
): boolean {
  try {
    const operations: Record<string, Function> = {
      [ConditionType.IsEmpty]: (): boolean => isEmpty(target),
      [ConditionType.IsNotEmpty]: (): boolean => !isEmpty(target),
      [ConditionType.Contains]: (): boolean => isContains(target, other),
      [ConditionType.IsNotContaining]: (): boolean =>
        !isContains(target, other),
      [ConditionType.EqualTo]: (): boolean => isEquals(target, other),
      [ConditionType.NotEqualTo]: (): boolean => !isEquals(target, other),
      [ConditionType.GreaterThan]: (): boolean => isGreaterThan(target, other),
      [ConditionType.GreaterThanOrEquals]: (): boolean =>
        isGreaterThanOrEquals(target, other),
      [ConditionType.LessThan]: (): boolean => isLessThan(target, other),
      [ConditionType.LessThanOrEquals]: (): boolean =>
        isLessThanOrEquals(target, other),
    }
    return operations[operator]?.(target, other) ?? false
  } catch (error) {
    return false
  }
}
