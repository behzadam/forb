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
  const [initialValues, setInitialValues] = useState<FieldValues>({});

  const fieldChanged = (uid: string, value: any) => {
    console.log('fieldChanged', uid, value);
    setInitialValues({ ...initialValues, [uid]: value });
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

  const onSubmit = (values: any, _: any) => {
    // todo - send data somewhere
    console.log(values);
  };

  useEffect(() => {
    setInitialValues(() => {
      console.log('fields', fields);
      return fields.reduce((result: FieldValues, field: FieldType) => {
        return { ...result, [field.uid]: field.value ?? '' };
      }, {});
    });
    console.log('mounted', initialValues);
  }, [fields]);

  return { fields, initialValues, fieldChanged, onSubmit };
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

setValues(() => {
  const newValues = fields.reduce((obj: FieldValues, field: any) => {
    obj[field.uid] = field.value;
    return obj;
  }, {});
  return { ...values, ...newValues };
});
*/
