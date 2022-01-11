import React, { ReactElement } from 'react';

import { Formik, Field, Form } from 'formik';

import { FieldType, OptionType } from '../../types';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import useFormGenerator from './useFormGenerator';

type FormProps = {
  formData: any[];
};

const FormGenerator = ({ formData }: FormProps): ReactElement => {
  const { fields, formValues, isLoading, fieldChanged, onSubmit } =
    useFormGenerator(formData);

  if (isLoading) return <Spinner />;
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-4 font-mono text-base font-bold">
        Forb / Form Generator
      </h1>
      <div className="p-6 bg-white border rounded-md shadow-sm border-gray-50">
        <Formik
          initialValues={formValues}
          enableReinitialize={true}
          onSubmit={async (values) => onSubmit(values)}
        >
          <Form>
            {fields.map((field: FieldType) => {
              switch (field.type) {
                case 'options':
                  return (
                    <div role="group" className="mb-8" key={field.uid}>
                      {field.options?.map((option: OptionType) => {
                        return (
                          <label
                            className="block mb-2 text-sm font-medium cursor-pointer"
                            key={option.uid}
                            htmlFor={option.uid}
                          >
                            <Field
                              type="radio"
                              name={field.uid}
                              value={option.value}
                              id={option.uid}
                              className="mr-4"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                fieldChanged(field.uid, e.target.value);
                              }}
                            />
                            {option.label}
                          </label>
                        );
                      })}
                    </div>
                  );
                case 'select':
                  return (
                    <Field
                      as="select"
                      className="block mb-6 w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                      key={field.uid}
                    >
                      {field.options?.map((option: OptionType) => {
                        return (
                          <option
                            className="py-4"
                            key={option.uid}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        );
                      })}
                    </Field>
                  );
                case 'checkboxes':
                  return (
                    <div
                      role="group"
                      aria-labelledby="checkbox-group"
                      className="mb-8"
                      key={field.uid}
                    >
                      {field.options?.map((option: OptionType) => {
                        return (
                          <label
                            className="block mb-2 text-sm font-medium cursor-pointer"
                            key={option.uid}
                            htmlFor={option.uid}
                          >
                            <Field
                              type="checkbox"
                              name={field.uid}
                              value={option.value}
                              id={option.uid}
                              className="mr-4"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                fieldChanged(field.uid, e.target.value);
                              }}
                            />
                            {option.label}
                          </label>
                        );
                      })}
                    </div>
                  );
                default:
                  return (
                    <div className="mb-6" key={field.uid}>
                      <label
                        className="block mb-3 text-sm font-semibold"
                        htmlFor={field.uid}
                      >
                        {field.label}
                      </label>
                      <Field
                        type={field.type}
                        name={field.uid}
                        id={field.uid}
                        className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          fieldChanged(
                            field.uid,
                            field.type === 'number'
                              ? Number(e.target.value)
                              : e.target.value
                          );
                        }}
                      />
                    </div>
                  );
              }
            })}
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormGenerator;
