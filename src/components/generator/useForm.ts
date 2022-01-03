import { useState, useEffect } from 'react';

import { FieldValues, FieldType, Conditions } from '../../types';

const fieldMeetsCondition =
  (values: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.conditions) {
      const matches = field.conditions.reduce((_, condition: Conditions) => {
        const targetValue = values[condition.when];
        return JSON.stringify(condition.value) === targetValue;
      }, false);
      console.log('matches', matches);
      return matches;
    }
    return true;
  };

const useForm = (formData: any[]) => {
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

export default useForm;

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
