import { useState, useEffect } from 'react';

import { FieldValues, FieldType } from '../../types';

const checkCondition = (target: any, value: any, state: string): boolean => {
  console.info(target, value, state);
  if (state === 'EqualTo') {
    return true;
  }
  return false;
};

const useForm = (formData: any[]) => {
  const [fields] = useState<any[]>(formData);
  const [values, setValues] = useState<FieldValues>({});

  useEffect(() => {
    console.log('useEffect', fields, values);
  }, [fields, values]);

  const fieldChanged = (uid: string, value: string) => {
    setValues({ ...values, [uid]: value });
  };

  const fieldMeetsCondition =
    (formValues: FieldValues) =>
    (field: FieldType): boolean => {
      if (field.conditions) {
        field.conditions.forEach((condition) => {
          const target = formValues[condition.target];
          return checkCondition(target, condition.value, condition.state);
        });
      }
      return true;
    };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // todo - send data somewhere
  };

  return { fields, values, fieldChanged, fieldMeetsCondition, onSubmit };
};

export default useForm;

// TODO: implement setValues
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

setValues(() => {
  const newValues = fields.reduce((obj: FieldValues, field: any) => {
    obj[field.uid] = field.value;
    return obj;
  }, {});
  return { ...values, ...newValues };
});
*/
