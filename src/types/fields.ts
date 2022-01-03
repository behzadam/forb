export enum ConditionsType {
  IsEmpty = 'IsEmpty',
  IsNotEmpty = 'IsNotEmpty',
  Contains = 'Contains',
  IsNotContaining = 'IsNotContaining',
  Or = 'Or',
  And = 'And',
  EqualTo = 'EqualTo',
  NotEqualTo = 'NotEqualTo',
  GreaterThan = 'GreaterThan',
  GreaterThanOrEquals = 'GreaterThanOrEquals',
  LessThan = 'LessThan',
  LessThanOrEquals = 'LessThanOrEquals',
}

export type Conditions = {
  when: string;
  is: string;
  value: any;
};

export enum ConditionType {
  All = 'All',
  One = 'One',
}

export enum ActionsType {
  Show = 'Show',
  Hide = 'Hide',
  JumpTo = 'JumpTo',
}

export type FieldValues = Record<string, any>;

export type FieldType = {
  uid: string;
  label: string;
  type: string;
  value: any;
  condition?: string;
  logic?: {
    if: string;
    conditions: Conditions[];
  };
  onChange(uid: string, value: string): void;
};
