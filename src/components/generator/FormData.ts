export const formData = [
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
    uid: 'f61233e8-565e-43d0-9c14-7d7f220c6021',
    options: [
      {
        label: 'Option 1',
        value: 'one',
        checked: false,
        uid: '161233e8-565e-43d0-9c14-7d7f220c6010',
      },
      {
        label: 'Option 2',
        value: 'two',
        checked: true,
        uid: '261233e8-565e-43d0-9c14-7d7f220c6010',
      },
    ],
  },
  {
    label: 'Conditional field',
    type: 'text',
    name: 'name',
    uid: 'bd90f44a-d479-49ae-ad66-c2c475daa66b',
    value: null,
    logic: {
      if: 'Any',
      conditions: [
        {
          when: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
          is: 'EqualTo',
          value: 2,
        },
        {
          when: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
          is: 'EqualTo',
          value: 4,
        },
      ],
    },
  },
];
