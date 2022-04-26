/*
import { useState, useEffect } from "react";

import * as yup from "yup";

import { FieldType } from "../../src/types";
import { addOrRemove } from "../../src/utils";
import { generateSchema } from "../../src/components/generator/generateSchema";
import { fieldMeetsCondition } from "../forb-core/lib/logic/fieldMeetsCondition";

const getDefaultValue = (field: FieldType): string | string[] => {
  // for: checkboxes
  const defaultSelectedList: string[] = [];
  // for: input, select, options
  let defaultSelected = field.value ?? "";
  field?.options?.forEach((option) => {
    if (option.checked) {
      if (field.type === "checkboxes") {
        defaultSelectedList.push(option.value);
      } else {
        defaultSelected = option.value;
      }
    }
  });
  console.log("defaultSelected", defaultSelected);
  return defaultSelected || defaultSelectedList;
};

const useFormGenerator = (formData: any[]) => {
  const [fields, setFields] = useState<any[]>(formData);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [validateSchema, setValidateSchema] = useState({});

  const fieldChanged = (field: FieldType, newValue: any) => {
    setFormValues(() => {
      if (field.type === "checkboxes") {
        return {
          ...formValues,
          [field.uid]: addOrRemove(formValues[field.uid], newValue),
        };
      }
      return { ...formValues, [field.uid]: newValue };
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

    // set form validation
    const validationSchema = formData.reduce(generateSchema, {});
    const validationObject = yup.object().shape(validationSchema);
    setValidateSchema(validationObject);
    console.log({ validationSchema, validationObject });
  }, [formData]);

  useEffect(() => {
    setFields(formData.filter(fieldMeetsCondition(formValues)));
  }, [formValues]);

  return {
    fields,
    formValues,
    isLoading,
    validateSchema,
    fieldChanged,
    onSubmit,
  };
};

export default useFormGenerator;

*/
