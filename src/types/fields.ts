export enum ConditionsType {
  IsEmpty,
  IsNotEmpty,
  Contains,
  IsNotContaining,
  Or,
  And,
  EqualTo,
  NotEqualTo,
  GreaterThan,
  GreaterThanOrEquals,
  LessThan,
  LessThanOrEquals,
}

export enum ActionsType {
  Show,
  Hide,
  JumpTo,
}

export type FieldValues = Record<string, any>;

export type FieldValueType =
  | string
  | ReadonlyArray<string>
  | number
  | undefined;

export type Conditions = {
  target: string;
  state: string;
  value: FieldValueType;
};

export type FieldType = {
  uid: string;
  label: string;
  type: string;
  value: FieldValueType;
  conditions?: Conditions[];
  onChange(uid: string, value: string): void;
};
