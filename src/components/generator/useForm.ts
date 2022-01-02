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
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fieldChanged = (uid: string, value: any) => {
    setFormValues({ ...formValues, [uid]: value });
  };

  const fieldMeetsCondition =
    (values: FieldValues) =>
    (field: FieldType): boolean => {
      if (field.conditions) {
        field.conditions.forEach((condition) => {
          const target = values[condition.target];
          return checkCondition(target, condition.value, condition.state);
        });
      }
      return true;
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
*/
