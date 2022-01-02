import React, { ReactElement } from 'react';

import { Formik, Field, Form } from 'formik';

import { FieldType } from '../../types';
import Spinner from '../ui/Spinner';
import useForm from './useForm';

type FormProps = {
  formData: any[];
};

const FormGenerator = ({ formData }: FormProps): ReactElement => {
  const { fields, formValues, isLoading, fieldChanged, onSubmit } =
    useForm(formData);

  if (isLoading) return <Spinner />;
  return (
    <div className="container mx-auto">
      <Formik
        initialValues={formValues}
        enableReinitialize={true}
        onSubmit={async (values) => onSubmit(values)}
      >
        <Form>
          {fields.map((field: FieldType) => {
            return (
              <Field
                key={field.uid}
                type={field.type}
                name={field.uid}
                id={field.uid}
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
    </div>
  );
};

export default FormGenerator;
