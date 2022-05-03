import {
  Conditions,
  If,
  FieldType,
  FieldValues,
  FieldTargetWithOther,
  ActionMap,
} from './types'

import {
  isContains,
  isEmpty,
  isEquals,
  isGreaterThan,
  isGreaterThanOrEquals,
  isLessThan,
  isLessThanOrEquals,
} from './utils/index'

const fieldMeetsTarget: ActionMap<FieldTargetWithOther> = {
  Contains: ([target, other]): boolean => isContains(target, other),
  EqualTo: ([target, other]): boolean => isEquals(target, other),
  GreaterThan: ([target, other]): boolean => isGreaterThan(target, other),
  GreaterThanOrEquals: ([target, other]): boolean =>
    isGreaterThanOrEquals(target, other),
  IsEmpty: (target): boolean => isEmpty(target),
  IsNotContaining: ([target, other]): boolean => !isContains(target, other),
  IsNotEmpty: (target): boolean => !isEmpty(target),
  LessThan: ([target, other]): boolean => isLessThan(target, other),
  LessThanOrEquals: ([target, other]): boolean =>
    isLessThanOrEquals(target, other),
  NotEqualTo: ([target, other]): boolean => !isEquals(target, other),
}

const fieldMeetsLogic = (logic: string, states: boolean[]): boolean => {
  if (logic === ConditionType.All) return states.every(item => item === true)
  if (logic === ConditionType.Any) return states.some(item => item === true)
  return false
}

export const fieldMeetsCondition =
  (formValues: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.logic) {
      const states: boolean[] = field.logic.conditions.reduce(
        (result: boolean[], condition: Conditions) => {
          // Get target value from form values (by uid key)
          const target = formValues[condition.when]
          // Field value
          const current = condition.value
          // Generate an array of boolean: [true, false, ...]
          return [...result, fieldMeetsTarget(condition.is, target, current)]
        },
        []
      )
      // Check if fields meet logic: All, Any
      return fieldMeetsLogic(field.logic.if, states)
    }
    // Show field by default
    return true
  }
