import { ReactElement } from 'react';

import Field from './Field';
import useForm from './useForm';

type FormProps = {
  formData: any[];
};

const FormGenerator = ({ formData }: FormProps): ReactElement => {
  const { fields, values, fieldMeetsCondition, fieldChanged, onSubmit } =
    useForm(formData);
  return (
    <form onSubmit={onSubmit}>
      {fields.filter(fieldMeetsCondition(values)).map((field: any) => {
        return (
          <Field
            key={field.uid}
            value={values[field.uid]}
            label={field.label}
            type={field.type}
            uid={field.uid}
            onChange={fieldChanged}
          />
        );
      })}
    </form>
  );
};

export default FormGenerator;
