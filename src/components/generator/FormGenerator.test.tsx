import { render, fireEvent } from '@testing-library/react';

import FormGenerator from './FormGenerator';

const formDataWithoutConditions = [
  {
    label: 'Number',
    type: 'number',
    name: 'phone',
    uid: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
    value: 1,
  },
  {
    label: 'Options',
    type: 'options',
    uid: 'op1233e8-565e-43d0-9c14-7d7f220c6021',
    options: [
      {
        label: 'Option 1',
        value: 'option 1',
        uid: 'op1233e8-565e-43d0-9c14-7d7f220c6055',
        checked: false,
      },
      {
        label: 'Option 2',
        value: 'option 2',
        uid: 'op1233e8-565e-43d0-9c14-7d7f220c6099',
        checked: true,
      },
    ],
  },
  {
    label: 'Select',
    type: 'select',
    uid: 'sl1233e8-565e-43d0-9c14-7d7f220c6021',
    options: [
      {
        label: 'Select 1',
        value: 'select 1',
        uid: 'sl1233e8-565e-43d0-9c14-7d7f220c6055',
        checked: false,
      },
      {
        label: 'Select 2',
        value: 'select 2',
        uid: 'sl1233e8-565e-43d0-9c14-7d7f220c6099',
        checked: true,
      },
    ],
  },
  {
    label: 'Checkboxes',
    type: 'checkboxes',
    uid: 'ch1233e8-565e-43d0-9c14-7d7f220c6021',
    options: [
      {
        label: 'Checkbox 1',
        value: 'ch one',
        checked: true,
        uid: 'ch1233e8-565e-43d0-9c14-7d7f220c6010',
      },
      {
        label: 'Checkbox 2',
        value: 'ch two',
        checked: true,
        uid: 'ch1233e8-565e-43d0-9c14-7d7f220c6011',
      },
    ],
  },
];

const formDataWithConditions = [
  {
    label: 'Number',
    type: 'number',
    name: 'phone',
    uid: 'f61233e8',
    value: 1,
  },
  {
    label: 'Conditional field',
    type: 'text',
    name: 'name 2',
    uid: 'e61233e8',
    value: null,
    logic: {
      if: 'Any',
      conditions: [
        {
          when: 'f61233e8',
          is: 'EqualTo',
          value: 2,
        },
      ],
    },
  },
];

test('should loads all form components correctly', async () => {
  const { getByText } = render(
    <FormGenerator formData={formDataWithoutConditions} />
  );

  expect(getByText('Number')).toBeInTheDocument();
  expect(getByText('Options')).toBeInTheDocument();
  expect(getByText('Select')).toBeInTheDocument();
  expect(getByText('Checkboxes')).toBeInTheDocument();
});

test('should render component based on conditions', async () => {
  const { getByTestId } = render(
    <FormGenerator formData={formDataWithConditions} />
  );

  const inputNumber = getByTestId('f61233e8');
  fireEvent.change(inputNumber, { target: { value: 2 } });
  expect(inputNumber).toHaveValue(2);

  // show
  const conditionalField = getByTestId('e61233e8');
  expect(conditionalField).toBeInTheDocument();

  // hide
  fireEvent.change(inputNumber, { target: { value: 1 } });
  expect(conditionalField).not.toBeInTheDocument();
});
