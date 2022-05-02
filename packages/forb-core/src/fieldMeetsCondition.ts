import { Conditions, If, FieldType, FieldValues } from './types'
import { fieldMeetsTarget } from './fieldMeetsTarget'

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
