export const formData = [
  {
    component: 'text',
    label: 'Phone',
    type: 'number',
    uid: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
    value: '1'
  },
  {
    component: 'text',
    label: 'Conditional field if first name is: Behzad',
    type: 'text',
    uid: 'bd90f44a-d479-49ae-ad66-c2c475daa66b',
    value: '',
    conditions: [
      {
        target: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
        state: '=',
        value: '021'
      },
      {
        target: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
        state: '|',
        value: '041'
      }
    ]
  }
]
