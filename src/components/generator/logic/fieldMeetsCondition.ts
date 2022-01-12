import {
  Conditions,
  ConditionType,
  FieldType,
  FieldValues,
} from '../../../types';
import { fieldValueMeetsTarget } from './fieldValueMeetsTarget';

const fieldValuesMeetLogic = (logic: string, states: boolean[]): boolean => {
  if (logic === ConditionType.All) return states.every((item) => item === true);
  if (logic === ConditionType.Any) return states.some((item) => item === true);
  return false;
};

export const fieldMeetsCondition =
  (formValues: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.logic) {
      const states: boolean[] = field.logic.conditions.reduce(
        (result: boolean[], condition: Conditions) => {
          // get target value from form values (by uid key)
          const target = formValues[condition.when];
          // field value
          const current = condition.value;
          // generate an array of boolean: [true, false, ...]
          return [
            ...result,
            fieldValueMeetsTarget(condition.is, target, current),
          ];
        },
        []
      );
      // check if filds meet logic: All, Any
      return fieldValuesMeetLogic(field.logic.if, states);
    }
    // show field by default
    return true;
  };
