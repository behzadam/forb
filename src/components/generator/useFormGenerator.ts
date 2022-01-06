import { useState, useEffect } from 'react';

import {
  FieldValues,
  FieldType,
  Conditions,
  ConditionsType,
  ConditionType,
} from '../../types';
import {
  isEmpty,
  isContains,
  isEqual,
  isGreaterThan,
  isGreaterThanOrEquals,
  isLessThan,
  isLessThanOrEquals,
} from '../../utils/operator';

const checkCondition = (
  state: string,
  target: string,
  dest: string
): boolean => {
  switch (state) {
    case ConditionsType.IsEmpty:
      return isEmpty(target);
    case ConditionsType.IsNotEmpty:
      return !isEmpty(target);
    case ConditionsType.Contains:
      return isContains(target, dest);
    case ConditionsType.IsNotContaining:
      return !isContains(target, dest);
    case ConditionsType.EqualTo:
      return isEqual(target, dest);
    case ConditionsType.NotEqualTo:
      return !isEqual(target, dest);
    case ConditionsType.GreaterThan:
      return isGreaterThan(target, dest);
    case ConditionsType.GreaterThanOrEquals:
      return isGreaterThanOrEquals(target, dest);
    case ConditionsType.LessThan:
      return isLessThan(target, dest);
    case ConditionsType.LessThanOrEquals:
      return isLessThanOrEquals(target, dest);
    default:
      break;
  }
  return false;
};

const fieldMeetsCondition =
  (values: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.logic) {
      const conditions = field.logic.conditions.reduce(
        (result: boolean[], condition: Conditions) => {
          const targetValue = values[condition.when];
          const destValue = JSON.stringify(condition.value);
          return [
            ...result,
            checkCondition(condition.is, targetValue, destValue),
          ];
        },
        []
      );
      switch (field.logic.if) {
        case ConditionType.All:
          return conditions.every((item) => item === true);
        case ConditionType.Any:
          return conditions.some((item) => item === true);
        default:
          break;
      }
    }
    // show all fields by default
    return true;
  };

const useFormGenerator = (formData: any[]) => {
  const [fields, setFields] = useState<any[]>(formData);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fieldChanged = (uid: string, value: any) => {
    setFormValues(() => {
      if (Array.isArray(formValues[uid])) {
        const list = formValues[uid];
        if (list.includes(value)) {
          return {
            ...formValues,
            [uid]: list.filter((item: string) => item !== value),
          };
        }
        return { ...formValues, [uid]: [...formValues[uid], value] };
      }
      return { ...formValues, [uid]: value };
    });
  };

  const onSubmit = async (values: {}) => {
    // todo - send data somewhere
    await console.log(values);
  };

  useEffect(() => {
    setFormValues(() => {
      return fields.reduce((result, field: FieldType) => {
        if (field.type === 'options') {
          let defaultChecked: string = '';
          field?.options?.forEach((option) => {
            if (option?.checked) {
              defaultChecked = option.value;
            }
          });
          return { ...result, [field.uid]: defaultChecked };
        }
        if (field.type === 'checkboxes') {
          let defaultCheckedList: string[] = [];
          field?.options?.forEach((option) => {
            if (option?.checked) {
              defaultCheckedList = [...defaultCheckedList, option.value];
            }
          });
          return { ...result, [field.uid]: defaultCheckedList };
        }
        return { ...result, [field.uid]: field.value ?? '' };
      }, {});
    });
    setIsLoading(false);
  }, [formData]);

  useEffect(() => {
    setFields(formData.filter(fieldMeetsCondition(formValues)));
  }, [formValues]);

  return { fields, formValues, isLoading, fieldChanged, onSubmit };
};

export default useFormGenerator;
