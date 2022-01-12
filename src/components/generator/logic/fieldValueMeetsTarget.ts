import { ConditionsType } from '../../../types';
import { isContains } from '../../../utils/isContains';
import { isEmpty } from '../../../utils/isEmpty';
import { isEquals } from '../../../utils/isEquals';
import { isGreaterThan } from '../../../utils/isGreaterThan';
import { isGreaterThanOrEquals } from '../../../utils/isGreaterThanOrEquals';
import { isLessThan } from '../../../utils/isLessThan';
import { isLessThanOrEquals } from '../../../utils/isLessThanOrEquals';

export function fieldValueMeetsTarget(operator: string, target: any): boolean;
export function fieldValueMeetsTarget(
  operator: string,
  target: any,
  other: any
): boolean;

export function fieldValueMeetsTarget(
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
