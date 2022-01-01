import React, { ReactElement } from 'react';

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { FieldType } from '../../types';
import useForm from './useForm';

type FormProps = {
  formData: any[];
};

const FormGenerator = ({ formData }: FormProps): ReactElement => {
  const { fields, initialValues, fieldChanged, onSubmit } = useForm(formData);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: typeof initialValues,
        { setSubmitting }: FormikHelpers<typeof initialValues>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        {fields.map((field: FieldType) => {
          return (
            <Field
              key={field.uid}
              type={field.type}
              name={field.uid}
              id={field.uid}
              value={initialValues[field.uid] ?? ''}
              className="block mt-4 border border-gray-500"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                fieldChanged(field.uid, e.target.value);
              }}
            />
          );
        })}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormGenerator;
