export type FieldValues = Record<string, any>

export enum Condition {
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
  LessThanOrEquals = 'LessThanOrEquals'
}

export enum Action {
  Show = 'Show',
  Hide = 'Hide',
  JumpTo = 'JumpTo'
}

export type ActionsState = 'Show' | 'Hide' | 'JumpTo'

export type FieldValueType =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]

export type Conditions = {
  target: string
  state: string
  value: FieldValueType
}

export type FieldType = {
  uid: string
  label: string
  type: string
  value: FieldValueType
  conditions?: Conditions
  onChange(uid: string, value: string): void
}
