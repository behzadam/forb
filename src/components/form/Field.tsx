import { ReactElement } from 'react';

import { FieldType } from '../../types';

type FieldProps = FieldType;

const Field = ({
  uid,
  label,
  type,
  value,
  onChange,
}: FieldProps): ReactElement => {
  return (
    <div key={uid}>
      <label htmlFor={uid}>{label}</label>
      <input
        type={type}
        id={uid}
        name={uid}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(uid, e.target.value);
        }}
      />
    </div>
  );
};

export default Field;
