export const formData = [
  {
    label: 'Number',
    type: 'number',
    uid: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
    value: 1,
  },
  {
    label: 'Conditional field',
    type: 'text',
    uid: 'bd90f44a-d479-49ae-ad66-c2c475daa66b',
    value: '',
    conditions: [
      {
        target: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
        state: 'EqualTo',
        value: 2,
      },
    ],
  },
];
