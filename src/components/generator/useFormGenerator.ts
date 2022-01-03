import { useState, useEffect } from 'react';

import {
  FieldValues,
  FieldType,
  Conditions,
  ConditionsType,
  ConditionType,
} from '../../types';

const checkCondition = (
  state: string,
  target: string,
  dest: string
): boolean => {
  switch (state) {
    case ConditionsType.EqualTo:
      return target === dest;
      break;
    default:
      break;
  }
  return true;
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
        case ConditionType.One:
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
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fieldChanged = (uid: string, value: any) => {
    setFormValues({ ...formValues, [uid]: value });
  };

  const onSubmit = async (values: {}) => {
    // todo - send data somewhere
    await console.log(values);
  };

  useEffect(() => {
    setFormValues(() => {
      return fields.reduce((result, field: FieldType) => {
        return { ...result, [field.uid]: field.value ?? '' };
      }, {});
    });
    setIsLoading(false);
  }, [formData]);

  useEffect(() => {
    setFields(formData.filter(fieldMeetsCondition(formValues)));
  }, [formValues]);

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return { fields, formValues, isLoading, fieldChanged, onSubmit };
};

export default useFormGenerator;

// todo: implement setValues
/** 
if (field.type === 'field_group') {
  for (const subField of field.fields) {
    obj[subField.uid] = subField?.value ?? '';
  }
} else if (field.type === 'checkboxes') {
  for (const subField of field.options) {
    obj[subField.uid] = subField?.checked ?? false;
  }
} else {
  obj[field.uid] = field?.value ?? '';
}


      if (field.condition) {
        switch (field.condition) {
          case ConditionType.All:
            return states.every((state) => state === true);
          case ConditionType.One:
            return states.some((state) => state === true);
          default:
            return false;
        }
      }
*/
