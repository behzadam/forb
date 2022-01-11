import { useState, useEffect } from 'react';

import { FieldValues, FieldType, Conditions, ConditionType } from '../../types';
import { addOrRemove } from '../../utils/addOrRemove';
import { ifMeetsCondition } from './FormGeneratorManager';

const getDefaultValue = (field: FieldType): string | string[] => {
  // for: checkboxes
  const defaultSelectedList: string[] = [];
  // for: input, select, options
  let defaultSelected = field.value ?? null;
  field?.options?.forEach((option) => {
    if (option.checked) {
      if (field.type === 'checkboxes') {
        defaultSelectedList.push(option.value);
      } else {
        defaultSelected = option.value;
      }
    }
  });
  return defaultSelected || defaultSelectedList;
};

const ifStatesMeetLogic = (is: string, states: boolean[]): boolean => {
  switch (is) {
    case ConditionType.All:
      return states.every((item) => item === true);
    case ConditionType.Any:
      return states.some((item) => item === true);
    default:
      break;
  }
  return false;
};

const fieldMeetsCondition =
  (formValues: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.logic) {
      const states: boolean[] = field.logic.conditions.reduce(
        (result: boolean[], condition: Conditions) => {
          // gets target value from form values (by uid key)
          const target = formValues[condition.when];
          // field value
          const current = condition.value;
          // console.log('ifMeetsCondition', target, current);
          // generates an array of boolean: [true, false, ...]
          return [...result, ifMeetsCondition(condition.is, target, current)];
        },
        []
      );
      // checks if filds meet logic: All, Any
      return ifStatesMeetLogic(field.logic.if, states);
    }
    // show field by default
    return true;
  };

const useFormGenerator = (formData: any[]) => {
  const [fields, setFields] = useState<any[]>(formData);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fieldChanged = (uid: string, value: any) => {
    setFormValues(() => {
      if (Array.isArray(formValues[uid])) {
        return {
          ...formValues,
          [uid]: addOrRemove(formValues[uid], value),
        };
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
        return {
          ...result,
          [field.uid]: getDefaultValue(field),
        };
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
