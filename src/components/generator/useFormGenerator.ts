import { useState, useEffect } from 'react';

import { FieldType } from '../../types';
import { addOrRemove } from '../../utils/addOrRemove';
import { fieldMeetsCondition } from './logic/fieldMeetsCondition';

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
      }, {} as Record<string, any>);
    });
    setIsLoading(false);
  }, [formData]);

  useEffect(() => {
    setFields(formData.filter(fieldMeetsCondition(formValues)));
  }, [formValues]);

  return { fields, formValues, isLoading, fieldChanged, onSubmit };
};

export default useFormGenerator;
